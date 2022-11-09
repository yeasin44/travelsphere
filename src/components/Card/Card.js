import React from "react";
import "./Card.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Card = ({ service }) => {
  const { img, title, price, description } = service;
  return (
    <div className="card w-76 bg-base-100 shadow-xl">
      <figure className="img-figure">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" style={{ objectFit: "cover" }} />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Price: <span className="text-xl">৳</span>
          {price}
        </p>
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
