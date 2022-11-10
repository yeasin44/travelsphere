import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { socialLogin, setLoading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    socialLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleLogin} className="text-xl text-white">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
