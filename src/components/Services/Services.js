import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../hooks/useTitle";
const Services = () => {
  const [services, setServices] = useState([]);
  useTitle("All services");

  useEffect(() => {
    fetch("https://assignment-11-server-three.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="m-6">
      <h2 className="text-3xl font-bold text-center mt-8">All Services</h2>
      <div className="mt-12 mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto ">
          {services?.map((service) => (
            <div className="card w-76 bg-base-100 shadow-xl" key={service._id}>
              <figure className="img-figure">
                <PhotoProvider>
                  <PhotoView src={service.img}>
                    <img src={service.img} alt="" />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>
                  Price: <span className="text-xl">৳</span>
                  {service.price}
                </p>
                <div>
                  <p>
                    <span className="font-bold">Description:</span>{" "}
                    {service.description.length > 100 ? (
                      <>{service.description.slice(0, 100) + "..."} </>
                    ) : (
                      service.description
                    )}
                  </p>
                </div>
                <div className="card-actions justify-center">
                  <Link to={`/allServices/${service._id}`}>
                    <button className="px-2 py-2 text-white bg-sky-500 cursor-pointer  rounded  font-bold">
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
