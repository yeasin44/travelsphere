import React from "react";

const Blog = () => {
  return (
    <div className=" p-6 bg-lime-100 h-screen">
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
              <span className="font-semibold">Ans:</span> SQL is the programming
              language used to interface with relational databases. (Relational
              databases model data as records in rows and tables with logical
              links between them). NoSQL is a class of DBMs that are
              non-relational and generally do not use SQL.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
        >
          <div className="collapse-title text-xl font-medium">
            2. What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-semibold">Ans:</span> JSON Web Token (JWT)
              is an open standard (RFC 7519) that defines a compact and
              self-contained way for securely transmitting information between
              parties as a JSON object. This information can be verified and
              trusted because it is digitally signed. JWTs can be signed using a
              secret (with the HMAC algorithm) or a public/private key pair
              using RSA or ECDSA. In authentication, when the user successfully
              logs in using their credentials, a JSON Web Token will be
              returned. Since tokens are credentials, great care must be taken
              to prevent security issues. In general, you should not keep tokens
              longer than required.You also should not store sensitive session
              data in browser storage due to lack of security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
