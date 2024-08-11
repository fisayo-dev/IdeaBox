import InputHolder from "../../components/InputHolder";
import Button from "../../components/Button";
import {
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { useState, useEffect } from "react";
import AppPage from "./AppPage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";

// Msg Color Variables
const default_Msg_Color = "text-gray-700";
const Error_Msg_Color = "text-red-700";
const Success_Msg_Color = "text-blue-700";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailStatus, setEmailStatus] = useState(default_Msg_Color);
  const [passwordStatus, setPasswordStatus] = useState(default_Msg_Color);
  const [showPassword, setShowPassword] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  // Cannot be in the login page if the you are logged in - directs you to the home page
  useEffect(() => {
    if (user) {
      navigate("/dashboard/ideas");
    }
  }, []);

  // Enables or Disables button whether filled is empty or not
  useEffect(() => {
    if (email.trim() !== "" && password.length >= 8) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [email, password]);

  // Submitting Form
  const submitForm = (e) => {
    e.preventDefault();
    const userInfo = { email, password };
    loginUser(userInfo);
  };

  // Validating Input if empty or not
  const validateEmailInput = (val) => {
    setEmailStatus(val.trim() !== "" ? Success_Msg_Color : Error_Msg_Color);
  };
  const validatePasswordInput = (val) => {
    setPasswordStatus(
      Array.from(val).length < 8 ? Error_Msg_Color : Success_Msg_Color
    );
  };

  return (
    <AppPage>
      <section className="m-auto grid items-center max-w-sm md:max-w-lg py-5">
        <form onSubmit={submitForm} className=" p-4 grid rounded-xl m-4  ">
          <h2 className="text-5xl m-3 font-bold text-center">LogIn</h2>
          <InputHolder>
            <div className="my-5 p-4 bg-gray-100 rounded-md font-medium border border-gray-100 text-gray-500">
              <div className="flex items-center gap-2 text-md">
                <FaEnvelope size={20} />
                <input
                  type="text"
                  placeholder="Email Address"
                  className={`text-gray-700 w-full bg-transparent rounded-md border-0 px-2`}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmailInput(e.target.value);
                  }}
                  value={email}
                />
                <FaCheckCircle size={20} className={emailStatus} />
              </div>
            </div>
            <div className="my-5 p-4 bg-gray-100 rounded-md font-medium border border-gray-100 text-gray-500">
              <div className="flex items-center gap-2 text-md">
                <FaLock size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`text-gray-700 w-full bg-transparent rounded-md border-0 px-2`}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePasswordInput(e.target.value);
                  }}
                  value={password}
                />
                <div
                  className={`cursor-pointer ${passwordStatus}`}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </div>
              </div>
            </div>
          </InputHolder>
          <Button disabled={disableButton} />
        </form>
      </section>
    </AppPage>
  );
};

export default Login;
