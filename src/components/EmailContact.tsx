import EmailIcon from "./EmailIcon";
import "./Footer.css";
interface Props {
  children: string;
}

const EmailContact = ({ children }: Props) => {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "44.64px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translate(0,-50%)",
        }}
      >
        <EmailIcon />
      </div>
      <a
        href="#"
        className="email-contact"
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "0.875rem",
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default EmailContact;
