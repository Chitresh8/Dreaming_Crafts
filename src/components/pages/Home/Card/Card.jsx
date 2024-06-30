/* eslint-disable no-unused-vars */
import React from "react";
import "./card.css";

export const Card = () => {
  return (
    <div className="card">
      {image && (
        <img
          src={image}
          alt={title}
          className="card-image"
        />
      )}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {children}
      </div>
    </div>
  );
};
