import React from "react";
import "./Card.css";

const Card = ({ service }) => {
  const { img, title, price, description } = service;
  return (
    <div className="card w-76 bg-base-100 shadow-xl">
      <figure className="img-figure">
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <div>
          <p>
            <span className="font-bold">Description:</span>{" "}
            {description.length > 100 ? (
              <>{description.slice(0, 100) + "..."} </>
            ) : (
              description
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
