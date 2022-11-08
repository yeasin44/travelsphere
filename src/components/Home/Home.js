import React, { useEffect, useState } from "react";
import banner from "../../assets/images/banner.png";
import Card from "../Card/Card";
import { FaSearchLocation, FaMoneyBillWave, FaSmileBeam } from "react-icons/fa";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-sky-100">
      <div>
        <div className="">
          <img src={banner} alt="" />
        </div>
        {/* <div className="flex justify-center">
          <p className="absolute text-6xl text-black font-bold   top-1/2">
            Welcome to
          </p>
          <div className="flex absolute">
            <div>
              <p className="text-2xl text-black font-bold mr-40 top-3/4">
                Jahan's Kitchen
              </p>
            </div>
            <div>
              <img className="w-20  top-3/4" src={logo} alt="" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="m-6">
        <div className="">
          <h2 className="text-center text-3xl font-bold mt-12 mb-12">
            My Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
          {services?.map((service) => (
            <Card key={service._id} service={service}></Card>
          ))}
        </div>
        <Link to="/services" className="flex justify-center">
          <button
            className="
          btn btn-primary mt-6 "
          >
            See all
          </button>
        </Link>
      </div>
      <div className="mb-20">
        <h2 className="text-center text-3xl font-bold mt-20 mb-2">
          Why Choose Travelsphere
        </h2>
        <p className="text-center font-semibold mb-12">
          We offer most competitive rates and offers for wonderful and beautiful
          places.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
          <div className="card w-76 bg-base-100 shadow-xl">
            <div className="card-body">
              <FaSearchLocation className="w-20 h-20 mx-auto"></FaSearchLocation>
              <h2 className="text-xl font-bold text-center">
                Wonderful Places
              </h2>
              <p>
                We do our best to have you a wonderful experience by taking you
                to the wonderful and amazing places around the world.
              </p>
            </div>
          </div>
          <div className="card w-76 bg-base-100 shadow-xl">
            <div className="card-body">
              <FaMoneyBillWave className="w-20 h-20 mx-auto"></FaMoneyBillWave>
              <h2 className="text-xl font-bold text-center">Worth of Money</h2>
              <p>
                There is not a better way to spend money, than spending money on
                travel. This is what we say, others and science.
              </p>
            </div>
          </div>
          <div className="card w-76 bg-base-100 shadow-xl">
            <div className="card-body">
              <FaSmileBeam className="w-20 h-20 mx-auto"></FaSmileBeam>
              <h2 className="text-xl font-bold text-center">Exciting Travel</h2>
              <p>
                We have a wide range of expertise and knowledge in our services.
                So we can provide you an exciting travel experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
