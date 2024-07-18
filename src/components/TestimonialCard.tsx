
interface Props {
  title: string;
  message: string;
  name: string;
  // occupation: string;
  pictureSrc: string;
}

const TestimonialCard = ({ title, message, name, pictureSrc }: Props) => {
  return (
    <div
      style={{
        maxWidth: "22.5rem",
        padding: "2.25rem 0.9rem 1.6rem 1.6rem",
        backgroundColor: "hsl(219, 30%, 18%)",
        borderRadius: "4px",
        boxShadow: "5px 5px 5px 5px hsl(217, 28%, 15%)",
      }}
    >
      <h3
        style={{
          fontFamily: "OpenSans",
          fontWeight: "700",
          fontSize: "1.25rem",
          marginBottom: "1rem",
          color: "black",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "0.936rem",
          lineHeight: "1.35rem",
          marginBottom: "1.3rem",
          color: "white",
        }}
      >
        {message}
      </p>
      <div style={{ paddingLeft: "32px", position: "relative" }}>
        <img
          style={{
            width: "25px",
            borderRadius: "12.5px",
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translate(0 ,-50%)",
          }}
          src={pictureSrc}
          alt="Profile Picture"
        />
        <p
          style={{
            fontFamily: "OpenSans",
            fontWeight: "700",
            fontSize: "0.68rem",
            marginBottom: "0.2rem",
            color: "white",
          }}
        >
          {name}
        </p>
        {/* <p
          style={{
            fontFamily: "OpenSans",
            fontWeight: "400",
            fontSize: "0.49rem",
            marginBottom: 0,
            color: "hsl(0 0% 75%)",
          }}
        >
          {occupation}
        </p> */}
      </div>
    </div>
  );
};

export default TestimonialCard;