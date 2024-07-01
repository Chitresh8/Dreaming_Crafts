/* eslint-disable react/prop-types */
import "./card.css";

export const Card = ({
  title,
  description,
  image,
  children,
  button,
  buttonTwo,
}) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-image"
      />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-btn">{button}</button>
        <button className="viewmore">{buttonTwo}</button>
        {children}
      </div>
    </div>
  );
};
