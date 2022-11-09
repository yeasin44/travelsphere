import React from "react";

const Blog = () => {
  return (
    <div className=" p-6 bg-lime-100">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-center text-3xl font-semibold">
          Question & Answer
        </h2>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            1. What is the difference between SQL and NoSQL?
          </div>
          <div className="collapse-content">
            <p>
              ANS: SQL is the programming language used to interface with
              relational databases. (Relational databases model data as records
              in rows and tables with logical links between them). NoSQL is a
              class of DBMs that are non-relational and generally do not use
              SQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
