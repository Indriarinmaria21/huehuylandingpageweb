import LocationIcon from "./LocationIcon";
import "./Footer.css";
interface Props {
  children: string;
}

const Location = ({ children }: Props) => {
  return (
    <div
      style={{
        width: "min(80%,388.8px)",
        position: "relative",
        paddingLeft: "39.88px",
      }}
    >
      <div style={{ position: "absolute", top: "3px", left: "0" }}>
        <LocationIcon />
      </div>
      <a
        href="#"
        className="location"
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "1rem",
          marginBottom: 0,
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default Location;
