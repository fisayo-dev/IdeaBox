import { useState, useEffect } from "react";
import InputHolder from "../../components/InputHolder";
import Button from "../../components/Button";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaKey,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import AppPage from "./AppPage";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Msg Color Variables
const default_Msg_Color = "text-gray-700";
const Error_Msg_Color = "text-red-700";
const Success_Msg_Color = "text-green-700";

const Signup = () => {
  // Input States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { user, registerUser } = useAuth();

  const [usernameStatus, setUsernameStatus] = useState(default_Msg_Color);
  const [emailStatus, setEmailStatus] = useState(default_Msg_Color);
  const [passwordStatus, setPasswordStatus] = useState(default_Msg_Color);
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(default_Msg_Color);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const passwordType = showPassword ? "text" : "password";
  const confirmPasswordType = showConfirmPassword ? "text" : "password";
  const [disableButton, setDisableButton] = useState(true);

  const navigate = useNavigate()

  // Cannot be in the login page if the you are logged in - directs you to the home page
  useEffect(() => {
    if (user) {
      navigate("/dashboard/ideas");
    }
  }, []);
  // Enables or Disables button whether filled is empty or not
  useEffect(() => {
    if (
      email.trim() !== "" &&
      username.trim() !== "" &&
      password.length >= 8 &&
      confirmPassword === password
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [email, password, confirmPassword, username]);

  const submitForm = (e) => {
    e.preventDefault();
    const userInfo = { username, email, password };
    registerUser(userInfo);
  };

  // Validate all inputs
  const validateUsernameInput = (val) => {
    setUsernameStatus(val.trim() !== "" ? Success_Msg_Color : Error_Msg_Color);
  };

  const validateEmailInput = (val) => {
    setEmailStatus(val.trim() !== "" ? Success_Msg_Color : Error_Msg_Color);
  };

  const validatePasswordInput = (val) => {
    setPasswordStatus(val.length >= 8 ? Success_Msg_Color : Error_Msg_Color);
  };

  const validateConfirmPasswordInput = (val) => {
    if (val !== "") {
      setConfirmPasswordStatus(
        val == password ? Success_Msg_Color : Error_Msg_Color
      );
    }
  };

  return (
    <AppPage>
      <section className="m-auto grid items-center h-full max-w-sm md:max-w-lg py-5">
        <form onSubmit={submitForm} className=" p-4 grid rounded-xl m-4  ">
          <h2 className="text-5xl m-3 font-bold text-center">SignUp</h2>
          <InputHolder>
            <div className="my-4 p-4 bg-gray-100 rounded-md font-medium border border-gray-100 text-gray-500">
              <div className="flex items-center gap-2 text-md">
                <FaUser size={20} />
                <input
                  type="text"
                  placeholder="Username"
                  className={`text-gray-700 w-full bg-transparent rounded-md border-0 px-2`}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    validateUsernameInput(e.target.value);
                  }}
                  value={username}
                />
                <FaCheckCircle
                  size={20}
                  className={`cursor-pointer ${usernameStatus}`}
                />
              </div>
            </div>
            <div className="my-4 p-4 bg-gray-100 rounded-md font-medium border border-gray-100 text-gray-500">
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
                <FaCheckCircle
                  size={20}
                  className={`cursor-pointer ${emailStatus}`}
                />
              </div>
            </div>
            <div className="my-4 p-4 bg-gray-100 rounded-md font-medium border border-gray-100 text-gray-500">
              <div className="flex items-center gap-2 text-md">
                <FaLock size={20} />
                <input
                  type={passwordType}
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
            <div className="my-4 p-4 bg-gray-100 rounded-md font-medium border border-gray-100 text-gray-500">
              <div className="flex items-center gap-2 text-md">
                <FaKey size={20} />
                <input
                  type={confirmPasswordType}
                  placeholder="Repeat password"
                  className={`text-gray-700 w-full bg-transparent rounded-md border-0 px-2`}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validateConfirmPasswordInput(e.target.value);
                  }}
                  value={confirmPassword}
                />
                <div
                  className={`cursor-pointer ${confirmPasswordStatus}`}
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </div>
              </div>
            </div>
          </InputHolder>
          <div className="p-3 text-center">
            Already have an account? <Link to='/login' className="font-bold text-blue-600">Login</Link>
          </div>
          <Button disabled={disableButton} />
        </form>
      </section>
    </AppPage>
  );
};

export default Signup;
