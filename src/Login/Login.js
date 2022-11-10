import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useTitle from "../hooks/useTitle";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const { logIn, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  useTitle("Login");

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        if (user.uid) {
          toast.success("Login successfull");
        } else {
          toast.error(error);
        }
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        toast.error(error.message.slice(22, -2));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content">
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="name"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <p className="text-sm text-center">
                New to Travelsphere?{" "}
                <Link to="/register" className="text-red-500 font-semibold">
                  Register
                </Link>
              </p>
            </div>
            <div className="">
              <div className="border border-current mt-4"></div>
              <div className=" flex justify-center mt-6 border p-3 bg-slate-800 rounded border-red-400">
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
