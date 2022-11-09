import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const ReviewCard = ({ review, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const { _id, serviceName, email, name, message, service } = review;

  return (
    <div>
      <div className="card w-50 bg-base-100 shadow-xl">
        <div className="flex gap-4">
          <div className="avatar px-6 mt-6">
            {service.length === 0 && <h2>No reviews were added</h2>}
            <div className="w-14 mask mask-squircle">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <div className="text-3xl ml-1 mt-1">
                  <FaUserAlt></FaUserAlt>
                </div>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mt-12">{name}</h2>
          </div>
        </div>
        <div className="card-body">
          <h2>{serviceName}</h2>
          <p>{message}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <button className="font-bold">Edit</button>
            </div>
            <div className="badge badge-outline">
              <button
                onClick={() => handleDelete(_id)}
                className="font-bold text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
