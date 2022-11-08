import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={handleCreateUser} className="card-body">
            <h1 className="text-4xl font-bold">Register Now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <p className="text-sm text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
