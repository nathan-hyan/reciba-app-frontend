import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Spinner
} from 'react-bootstrap';
import {
  faSave,
  faTimesCircle,
  faQrcode
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notify } from 'react-notify-toast';
import { invoice } from '../../../Interfaces/invoice';
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import ShowQRCodeModal from '../qr/ShowQRCodeModal';
import { IdGeneration } from '../../../Context/IdGeneration';
import { UserContext } from '../../../Context/UserContext';
import io from 'socket.io-client';
import { endpoints } from '../../../constants/endpoint';

let socket: SocketIOClient.Socket;
let socketRoomId: string;

export default function GenerateInvoice() {
  var date = new Date().toISOString().substr(0, 10);

  const axiosHeaders = localStorage.getItem('bill-token')
    ? { headers: { auth: localStorage.getItem('bill-token') } }
    : undefined;

  const { id } = useParams<any>();

  // Get uniqueId for this session
  const { generateId } = useContext(IdGeneration);
  const { isLoggedIn } = useContext(UserContext);

  //Setting up state
  const [state, setState] = useState<invoice>({
    invoiceNumber: 1,
    date,
    from: '',
    amountText: '',
    amount: 0,
    concept: '',
    currency: 'ARS',
    pending: false,
    sign: ''
  });
  const [validated, setValidated] = useState(false);
  const [showQRCodeModal, setShowQRCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Setting up history
  const history = useHistory();

  /**
   * Opens and closes QRCode modal
   */
  const toggleShowQRCodeModal = () => {
    setShowQRCodeModal((i) => !i);
  };

  /**
   * Keeps track of inputs and saves them to state
   * @param e Input
   */
  const handleChange = (e: any) => {
    let { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    setState({ ...state, [name]: newValue });
  };

  /**
   * Saves invoice to database
   * @param e Form
   */
  const handleSubmit = (e: {
    preventDefault: () => void;
    currentTarget?: any;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);

    let { currentTarget } = e;
    if (!state.sign && !state.pending) {
      notify.show('Se necesita la firma para continuar', 'error');
      setIsLoading(false);
      return null;
    }

    if (currentTarget.checkValidity() === false) {
      notify.show('Please verify the form and try again', 'error');
    } else {
      if (id) {
        Axios.put(
          `${endpoints.backend}api/invoice/edit/${id}`,
          { ...state },
          { headers: { auth: localStorage.getItem('bill-token') } }
        )
          .then(({ data }) => {
            if (data.success) {
              history.push(`/invoice/display/${data.data._id}/${socketRoomId}`);
            }
            notify.show(data.message, 'success');
            setIsLoading(false);
          })
          .catch((err) => {
            notify.show(
              'Ocurrió un error creando el comprobante, por favor reintente',
              'error'
            );
            setIsLoading(false);
          });
      } else {
        Axios.post(
          `${endpoints.backend}api/invoice/`,
          { ...state },
          axiosHeaders
        )
          .then(({ data }) => {
            if (data.id) {
              history.push(
                state.pending
                  ? `/dashboard`
                  : `/invoice/display/${data.id}/${socketRoomId}`
              );
            }
            notify.show(data.message, 'success');
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err.message);

            notify.show(
              'Ocurrió un error creando el comprobante, por favor reintente',
              'error'
            );
            setIsLoading(false);
          });
      }
    }

    setValidated(true);
  };

  useEffect(() => {
    socket = io(endpoints.backend);

    if (id) {
      Axios.get(`${endpoints.backend}api/invoice/single/${id}`).then(
        ({ data }) => {
          const newDate = data.data.date.substr(0, 10);
          setState({ ...data.data, date: newDate });
        }
      );
    }

    socket.on('close', () => {
      setShowQRCodeModal(false);
      notify.show('Teléfono Conectado!', 'success');
    });

    socket.on('sign', (data: string) => {
      setState((oldstate) => ({ ...oldstate, sign: data }));
    });

    return () => {
      console.log('Fired?');
      socket.disconnect();
      socketRoomId = '';
    };

    //eslint-disable-next-line
  }, [endpoints.backend]);

  const showQRCodeModalAndGenerateCode = async () => {
    if (!socketRoomId) {
      socketRoomId = generateId();
      socket.emit('join', socketRoomId);
    }
    setShowQRCodeModal((i) => !i);
  };

  return (
    <Container>
      <ShowQRCodeModal
        currentId={socketRoomId}
        show={showQRCodeModal}
        onHide={toggleShowQRCodeModal}
      />
      <Row className="h-100-minus align-items-center">
        <Col className="bg-light p-3 shadow rounded">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control
                    required
                    name="date"
                    onChange={handleChange}
                    value={state.date.toString()}
                    type="date"
                  />
                  <Form.Control.Feedback type="invalid">
                    La fecha es necesaria
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <p className="text-center">Recibo</p>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>De</Form.Label>
                  <Form.Control
                    required
                    name="from"
                    onChange={handleChange}
                    value={state.from}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control
                    required
                    name="amountText"
                    onChange={handleChange}
                    value={state.amountText}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>En concepto de</Form.Label>
                  <Form.Control
                    required
                    name="concept"
                    onChange={handleChange}
                    value={state.concept}
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={3}>
                <Form.Group>
                  <Form.Label>Cantidad</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <select
                          name="currency"
                          onChange={handleChange}
                          value={state.currency}
                          className="no-decoration"
                        >
                          <option>ARS</option>
                          <option>USD</option>
                        </select>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      required
                      name="amount"
                      onChange={handleChange}
                      value={state.amount}
                      min={1}
                      type="number"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col className="text-right">
                <p className="lead">Firma</p>
              </Col>
              <Col>
                {state.sign ? (
                  <img height="100" src={state.sign} alt="signature" />
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col className="text-right d-flex align-items-center justify-content-end">
                {isLoggedIn ? (
                  <fieldset className="mr-3 py-1 px-2 border border-gray rounded">
                    <label className="m-0 p-0">
                      <input
                        type="checkbox"
                        name="pending"
                        checked={state.pending}
                        onChange={handleChange}
                        className="mr-1 p-0 m-0"
                      />
                      Marcar boleta para firmar luego
                    </label>
                  </fieldset>
                ) : null}

                <Button
                  variant="info"
                  onClick={showQRCodeModalAndGenerateCode}
                  className="mr-3"
                >
                  <FontAwesomeIcon icon={faQrcode} /> Mostrar QR para firmar
                </Button>
                <Button
                  disabled={isLoading}
                  variant="secondary"
                  className="mr-3"
                  onClick={() => {
                    history.push('/');
                  }}
                >
                  <FontAwesomeIcon icon={faTimesCircle} /> Cancelar
                </Button>
                <Button disabled={isLoading} variant="primary" type="submit">
                  {isLoading ? (
                    <Spinner size="sm" animation="border" />
                  ) : (
                    <FontAwesomeIcon icon={faSave} />
                  )}{' '}
                  Guardar
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
