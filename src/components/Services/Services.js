import { useEffect, useState } from "react";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-orange-100">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto ">
        {services?.map((service) => (
          <div className="card w-76 bg-base-100 shadow-xl">
            <figure className="img-figure">
              <img src={service.img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.title}</h2>
              <p>Price: ${service.price}</p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
