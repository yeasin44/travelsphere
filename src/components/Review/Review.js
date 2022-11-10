import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Review = () => {
  const { _id, title } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.name.value}`;
    const email = user?.email;
    const reviews = form.reviews.value;

    const review = {
      service: _id,
      serviceName: title,
      name,
      email,
      reviews,
    };

    fetch("https://assignment-11-server-three.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Review added");
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div>
        {user ? (
          <>
            <form onSubmit={handleReview}>
              <div className="grid grid-cols-1">
                <label htmlFor="" className="text-lg mt-4 font-bold m-2">
                  Name:{" "}
                </label>
                <input
                  name="name"
                  type="name"
                  placeholder="Your Name"
                  className="input input-bordered w-1/2 "
                />
              </div>

              <label
                htmlFor="name"
                className="text-lg mt-4 font-bold block m-2"
              >
                Review content:{" "}
              </label>
              <textarea
                name="reviews"
                className="textarea textarea-bordered w-1/2"
                placeholder="Review"
                required
              ></textarea>

              <input
                className="btn  px-3  rounded font-bold mt-3 block "
                type="submit"
                value="Add Review"
              />
            </form>
          </>
        ) : (
          <p className="text-2xl text-center">
            Please{" "}
            <Link className="font-bold text-red-500" to="/login">
              Login
            </Link>{" "}
            to add a review
          </p>
        )}
      </div>
    </div>
  );
};

export default Review;
