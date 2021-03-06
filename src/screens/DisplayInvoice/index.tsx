import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { savePDF } from "@progress/kendo-react-pdf";
import { drawDOM, exportPDF } from "@progress/kendo-drawing";
import { notify } from "react-notify-toast";
import io from "socket.io-client";
import i18next from "i18next";
import { Invoice } from "interfaces/invoice";
import { endpoints } from "constants/endpoints";
import { getHeaders } from "constants/headers";
import LoadingScreen from "components/LoadingScreen";
import EmailInput from "./components/EmailInput";
import ButtonsGroup from "./components/ButtonsGroup";
import Bill from "./components/Bill";

let socket: SocketIOClient.Socket;

export default function DisplayInvoice() {
  const invoice = useRef<any>(<div />);
  const { id, socketId } = useParams<any>();

  const [state, setState] = useState<Invoice>({
    invoiceNumber: 1,
    logo: "",
    date: new Date(),
    from: "",
    amountText: "",
    amount: 0,
    concept: "",
    sign: "",
    currency: "ARS",
    pending: false,
    transactionNumber: undefined,
  });
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [recipient, setRecipient] = useState<string>("");
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Adapta la fecha para poder ser parseada sin necesidad de usar Moment
   * @param input Fecha en formato (YYYY-MM-DD)
   */
  const dateTransformer = (input: string) => {
    const dateWithoutTime = input.slice(0, 10);
    const dateArray = dateWithoutTime.split("-");
    const year: number = parseInt(dateArray[0]);
    const month: number = parseInt(dateArray[1], 10) - 1;
    const date: number = parseInt(dateArray[2]);

    return { year, month, date };
  };

  /**
   * Guarda el contenido del DOM a PDF para descargar
   */
  const exportPDFToFile = () => {
    savePDF(invoice.current, {
      paperSize: "A4",
      fileName: `Invoice - ${Intl.DateTimeFormat(navigator.language, {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      }).format(new Date(state.date))} - ${id}`,
      landscape: false,
      scale: 0.5,
    });
  };

  /**
   * Transformar el DOM que contiene el PDF a Base64
   */
  const transformPDFToBase64 = () => {
    const base64 = drawDOM(invoice.current, {
      paperSize: "A4",
      landscape: true,
      scale: 0.75,
    }).then((group) => exportPDF(group));

    return base64;
  };

  const emitPDFViaSocket = async () => {
    socket.emit("pdf", await transformPDFToBase64());
  };

  /**
   * Enviar base64 del PDF por email al recipiente especificado
   */
  const sendEmail = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const file = await transformPDFToBase64();

    if (form.checkValidity() === true) {
      Axios.post(`${endpoints.backend}api/mail/send/invoice`, {
        file,
        date: state.date,
        email: recipient,
      })
        .then(({ data }) => {
          const { success, message } = data;

          if (success) {
            notify.show(message, "success");
          } else {
            notify.show(message, "error");
          }
        })
        .catch((error) => {
          notify.show(i18next.t("DisplayInvoice:error"), "error");
        });
    }

    setValidated(true);
  };

  useEffect(() => {
    socket = io(endpoints.backend);

    Axios.get(`${endpoints.backend}api/invoice/single/${id}`, getHeaders())
      .then(({ data }) => {
        setIsLoading(false);
        const { year, month, date } = dateTransformer(data.data.date);
        setState({ ...data.data, date: new Date(year, month, date) });
      })
      .catch((err) => {
        notify.show(i18next.t("DisplayInvoice:error"));
        setIsLoading(false);
      });

    socket.emit("join", socketId);

    return () => {
      socket.off("join");
    };
    // eslint-disable-next-line
  }, [endpoints.backend]);

  return isLoading ? (
    <LoadingScreen text={i18next.t("GenerateInvoice:loadingText")} />
  ) : (
    <Container>
      <Row className="my-5">
        <ButtonsGroup
          exportPDFToFile={exportPDFToFile}
          transformPDFToBase64={emitPDFViaSocket}
          toggleEmailInput={() => setShowEmail(!showEmail)}
          hasSocketId={socketId === "no"}
        />
      </Row>
      <Row className={showEmail ? "d-block" : "d-none"}>
        <EmailInput
          recipient={recipient}
          sendEmail={(e) => sendEmail(e)}
          setRecipient={(e) => setRecipient(e.target.value)}
          validated={validated}
        />
      </Row>
      <div ref={invoice}>
        <Bill data={state} isOriginal />
        <Bill data={state} />
      </div>
    </Container>
  );
}
