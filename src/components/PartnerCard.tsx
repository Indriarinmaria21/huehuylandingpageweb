// src/components/PartnerCard.js

import React from "react";
import "./PartnerCard.css"; // tambahkan styling untuk PartnerCard

const PartnerCard = ({ logo, name, description, website }) => {
  return (
    <div className="partner-card">
      <img src={logo} alt={`${name} logo`} className="partner-logo" />
      <h3 className="partner-name">{name}</h3>
      <p className="partner-description">{description}</p>
      <a href={website} className="partner-website">
        Visit Website
      </a>
    </div>
  );
};

export default PartnerCard;
