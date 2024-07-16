import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button";
import validateEmail from "../utils/validateEmail";
import "./Footer.css";

interface Props {
  heading: string;
  message: string;
  buttonText: string;
}

const EmailSignUp = ({ heading, message, buttonText }: Props) => {
  const [emailValue, setEmailValue] = useState("");

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setEmailValue(event.target.value);
  }

  const [error, setError] = useState("");

  function handleValidation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(validateEmail(emailValue));
  }

  return (
    <div
      style={{
        width: "59.2vw",
        textAlign: "center",
        backgroundColor: "hsl(217, 28%, 15%)",
        borderRadius: "8px",
        boxShadow: "4px 4px 4px 4px  rgba(0, 0, 0, 0.16)",
      }}
    >
      <div
        style={{
          padding: "2.53rem 8vw 1rem",
        }}
      >
        <p
          style={{
            fontFamily: "Raleway",
            fontWeight: "700",
            fontSize: "2.01rem",
          }}
        >
          {heading}
        </p>
        <p
          style={{
            fontFamily: "OpenSans",
            fontWeight: "400",
            fontSize: "0.875rem",
            marginBottom: "1.4rem",
          }}
        >
          {message}
        </p>
      </div>
      <form onSubmit={handleValidation} noValidate>
        <div style={{ paddingBottom: "2.4rem" }}>
          <div
            className="input-container"
            style={{
              display: "inline-block",
              width: "55.7%",
              height: "3rem",
              margin: "0 2.1vw 0 0",
            }}
          >
            <input
              type="email"
              name="email"
              id="exampleInputEmail1"
              placeholder="email@example.com"
              onChange={handleInput}
              className="input"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "1.5rem",
                fontFamily: "OpenSans",
                fontSize: "0.755rem",
                paddingLeft: "2.68vw",
              }}
            />
            {error && <p className="error ">{error}</p>}
          </div>

          <Button width="13.74vw" heightInRem={3} fontSize="0.89rem">
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmailSignUp;
