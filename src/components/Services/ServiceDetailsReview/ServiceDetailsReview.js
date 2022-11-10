import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const ServiceDetailsReview = ({ review }) => {
  const { user } = useContext(AuthContext);

  const { serviceName, name, reviews } = review;
  return (
    <div>
      <div className="card w-50 bg-base-100 shadow-xl">
        <div className="flex gap-4">
          <div className="avatar ml-8 mt-6">
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
            <h2 className="lg:text-xl font-bold mt-8 mr-6">{name}</h2>
          </div>
        </div>
        <div className="card-body">
          <h2 className="font-semibold">{serviceName}</h2>
          <div className="border"></div>
          <p>{reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsReview;
