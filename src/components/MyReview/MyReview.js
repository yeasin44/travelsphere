import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  // Delete method

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Deleted successfully");
          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
        });
    }
  };
  return (
    <div className="bg-base-200 relative">
      <div className="relative ">
        <h2 className="text-2xl font-bold text-center py-4">My Reviews</h2>
        <div className="border w-40 border-orange-400  mb-12 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 max-w-screen-lg mx-auto p-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
