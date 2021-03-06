import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import BootstrapInput from "components/BootstrapInput";
import { FORM_INPUTS } from "screens/Profile/constants";
import i18next from "i18next";

type StateProps = {
  name: string;
  email: string;
  [key: string]: string;
};

interface Props {
  handleChange: (arg0: { name?: string; email?: string }) => void;
  currentData: {
    name: string;
    email: string;
    oldEmail: string;
  };
}

function InfoForm({ handleChange, currentData }: Props) {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState<StateProps>({
    name: "",
    email: "",
  });

  const handleLocalChange = (e: any) => {
    const { value, name } = e.target;

    setState({ ...state, [name]: value });
    handleChange({ [name]: value });
  };

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useEffect(() => {
    setState(currentData);
  }, [currentData]);

  return (
    <Col className="d-flex flex-column align-items-center justify-content-center">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-75"
      >
        {FORM_INPUTS.map((input) => (
          <BootstrapInput
            key={input.name}
            name={input.name}
            label={i18next.t(input.label)}
            type={input.type}
            onChange={handleLocalChange}
            value={state[input.name]}
            required={input.required}
            subtext={
              input.name === "email" &&
              currentData.email !== currentData.oldEmail
                ? i18next.t("ProfilePage:emailConfirmationAlert")
                : ""
            }
            subtextColor="danger"
          />
        ))}
      </Form>
    </Col>
  );
}

export default InfoForm;
