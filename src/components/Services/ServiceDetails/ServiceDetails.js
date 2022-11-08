import { useLoaderData } from "react-router-dom";
import Review from "../../Review/Review";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { img, title, price, description, duration } = services;
  console.log(services);

  return (
    <div className="bg-base-200">
      <div className="hero max-w-screen-lg mx-auto p-8">
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
      <div className="mt-12 max-w-screen-lg mx-auto text-center">
        <Review></Review>
      </div>
    </div>
  );
};

export default ServiceDetails;
