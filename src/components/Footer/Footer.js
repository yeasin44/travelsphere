import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/travel-logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="footer p-10  text-neutral-content max-w-screen-lg mx-auto">
        <div>
          <img className="w-20" src={logo} alt="" />
          <p>
            Travelsphere
            <br />
            Providing safe journey from 2010
          </p>
        </div>
        <div>
          <span className="footer-title ">Services</span>
          <Link className="link link-hover">Best Places</Link>
          <Link className="link link-hover">Worth of Money</Link>
          <Link className="link link-hover">Exciting Travel</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <p className="text-base-200 text-sm py-6 lg:text-base text-center">
        &copy; Travelsphere 2022 - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
