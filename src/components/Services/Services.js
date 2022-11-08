import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="m-6">
      <h2 className="text-3xl font-bold text-center mt-8">All Services</h2>
      <div className="mt-12 mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto ">
          {services?.map((service) => (
            <div className="card w-76 bg-base-100 shadow-xl">
              <figure className="img-figure">
                <img src={service.img} alt="" />
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
                  <Link to={`/services/${service._id}`}>
                    <button className="btn btn-primary">View details</button>
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
