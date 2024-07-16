import PhoneIcon from "./PhoneIcon";
import "./Footer.css";

interface Props {
  children: string;
}

const PhoneContact = ({ children }: Props) => {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "44.64px",
        marginBottom: "1rem",
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
        <PhoneIcon />
      </div>
      <a
        href="#"
        className="phone-contact"
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

export default PhoneContact;
