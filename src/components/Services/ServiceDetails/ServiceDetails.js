import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Review from "../../Review/Review";
import ServiceDetailsReview from "../ServiceDetailsReview/ServiceDetailsReview";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { img, title, price, description, duration } = services;
  // console.log(services);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email]);

  return (
    <div className="bg-base-200">
      <div className="hero max-w-screen-lg mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div>
              <h2 className="text-red-600 font-bold">Tour Plan:::</h2>
              <p>{duration}</p>
            </div>
            <button className="py-1 px-3 mt-3 bg-sky-400 border border-black rounded font-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-center text-xl font-semibold">Review & Ratings</h2>
      <div className="border w-48 mt-2 border-orange-300 mx-auto"></div>
      <div className="bg-base-200 relative ">
        <div className="relative "></div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 max-w-screen-lg mx-auto p-4">
          {reviews.map((review) => (
            <ServiceDetailsReview
              key={review._id}
              review={review}
            ></ServiceDetailsReview>
          ))}
        </div>
      </div>
      <div className="mt-12 max-w-screen-lg mx-auto py-6">
        <Review></Review>
      </div>
    </div>
  );
};

export default ServiceDetails;
