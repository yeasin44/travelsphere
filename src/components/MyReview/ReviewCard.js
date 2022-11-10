import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const ReviewCard = ({ review, handleDelete }) => {
  const { user } = useContext(AuthContext);

  const { _id, serviceName, email, name, reviews, service } = review;

  return (
    <div>
      <div className="card w-50 bg-base-100 shadow-xl">
        <div className="flex gap-4">
          <div className="avatar ml-8 mt-6">
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
            <h2 className="text-xl font-bold mt-8 mr-6">{name}</h2>
          </div>
        </div>
        <div className="card-body">
          <h2 className="font-semibold">{serviceName}</h2>
          <div className="border"></div>
          <p>{reviews}</p>
          <div className="card-actions justify-end">
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="badge badge-outline">
              Edit
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <p className="py-4">{reviews}</p>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="badge badge-outline">
                    Update
                  </label>
                </div>
              </div>
            </div>
            {/* <div className="badge badge-outline">
              <button className="font-bold">Edit</button>
            </div> */}
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
