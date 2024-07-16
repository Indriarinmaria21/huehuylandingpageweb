import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  heading: string;
  content: string;
  maxWidth: string;
}

const FeatureCard = ({ icon, heading, content, maxWidth }: Props) => {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth,
      }}
    >
      <div>{icon}</div>
      <p
        style={{
          fontFamily: "Raleway",
          fontWeight: "700",
          fontSize: "1.25rem",
          margin: "1.54rem 0 0",
        }}
      >
        {heading}
      </p>
      <p
        style={{
          fontFamily: "OpenSans",
          fontWeight: "400",
          fontSize: "0.874rem",
          margin: "0.3rem 0 0",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default FeatureCard;
