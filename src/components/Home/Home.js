import React, { useEffect, useState } from "react";
import banner from "../../assets/images/banner.png";
import Card from "../Card/Card";
import { FaSearchLocation, FaMoneyBillWave, FaSmileBeam } from "react-icons/fa";
import "./Home.css";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Clients from "../Clients/Clients";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle("Home");

  useEffect(() => {
    fetch("https://assignment-11-server-three.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-sky-100">
      <div className="overflow-hidden relative">
        <div className="">
          <img src={banner} alt="" />
          <div className="absolute inset-0  font-bold bg-gray-900 bg-opacity-50">
            <h2 className=" text-center flex justify-center top-8 md:top-20 lg:top-40  lg:text-5xl md:text-4xl relative text-white">
              I will guide you <br /> To your <br /> Destination!
            </h2>
          </div>
        </div>
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
        <Link to="/allServices" className="flex justify-center">
          <button
            className="
          btn btn-primary mt-6 "
          >
            See all
          </button>
        </Link>
      </div>
      <div className="py-12">
        <h2 className="text-center text-xl lg:text-3xl font-bold mt-6 mb-2">
          Why Choose Travelsphere
        </h2>
        <p className="text-center font-semibold mb-12">
          I offer most competitive rates and safe guide.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto p-6">
          <div className="card w-76 bg-base-100 shadow-xl">
            <div className="card-body">
              <FaSearchLocation className="w-20 h-20 mx-auto"></FaSearchLocation>
              <h2 className="text-xl font-bold text-center">
                Wonderful Places
              </h2>
              <p>
                I do my best to have you a wonderful experience by taking &
                guiding you to the wonderful and amazing places around the
                world.
              </p>
            </div>
          </div>
          <div className="card w-76 bg-base-100 shadow-xl">
            <div className="card-body">
              <FaMoneyBillWave className="w-20 h-20 mx-auto"></FaMoneyBillWave>
              <h2 className="text-xl font-bold text-center">Worth of Money</h2>
              <p>
                There is not a better way to spend money, than spending money on
                travel. This is what I say, others and science.
              </p>
            </div>
          </div>
          <div className="card w-76 bg-base-100 shadow-xl">
            <div className="card-body">
              <FaSmileBeam className="w-20 h-20 mx-auto"></FaSmileBeam>
              <h2 className="text-xl font-bold text-center">Exciting Travel</h2>
              <p>
                I have a wide range of expertise and knowledge in my services.
                So I can provide you an exciting travel experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Clients></Clients>
      </div>
    </div>
  );
};

export default Home;
