import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Login({ getUser }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [Isempty, setIsempty] = useState(false);
  const [eyeActiv, setEyeActiv] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
  };

  const getData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email_or_phone: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://ecommercev01.pythonanywhere.com/user/token/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("ShopToken", result?.access);
        setIsLoading(false);
        getUser();
        if (password && email) {
          navigate("/");
        } else {
          toast.error(result?.email_or_phone[0]);
          setIsempty(true);
        }
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.error(error));
  };

  const activGetData = () => {
    getData();
  };

  return (
    <div className="Login">
      <div className="container">
        <img src="/public/imgs/signUpImg.png" alt="" />

        <div className={Isempty ? "login Isempty" : "login"}>
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              activGetData();
            }}
            action=""
          >
            <input
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email or Phone Number"
              type="text"
              required
            />
            <div className="login_password">
              <input
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                type={eyeActiv ? "text" : "password"}
                required
              />
              <div
                onClick={() => {
                  setEyeActiv(!eyeActiv);
                }}
                className="eye_div"
              >
                {eyeActiv ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="btn_login">
              <button
                className={`loginBtn ${isLoading ? "loading" : ""}`}
                onClick={() => {
                  setIsLoading(true);
                  handleClick();
                  activGetData();
                }}
                disabled={isLoading}
              >
                <span>Log In</span>
                <div className="spinner"></div>
              </button>{" "}
              <Link to={"/signUp"}>
                {" "}
                <span>Forget Password?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
