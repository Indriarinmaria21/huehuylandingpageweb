import EmailIcon from "./EmailIcon";
import "./Footer.css";

interface Props {
  email: string; // Tambahkan properti email untuk menentukan alamat email
}

function EmailContact({email}: Props) {
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
        href={`mailto:${email}`} // Mengatur href untuk membuka klien email dengan alamat email
        className="email-contact"
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "0.875rem",
        }}
      >
        {email}
      </a>
    </div>
  );
}

export default EmailContact;
