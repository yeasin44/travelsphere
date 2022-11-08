import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { socialLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    socialLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successfull");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="text-xl">
        <FaGoogle></FaGoogle>
      </button>
      <button className="text-xl ml-4">
        <FaGithub></FaGithub>
      </button>
    </div>
  );
};

export default SocialLogin;
