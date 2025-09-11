import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function SignUp() {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

};
  const navigate = useNavigate();

  const getAccount = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      first_name: userName,
      email_or_phone: userEmail,
      password: userPassword,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/user/register/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result?.email_or_phone ? result?.email_or_phone[0] : false) {
          toast.error(result?.email_or_phone[0]);
          setIsLoading(false);
        } else {
          toast.success("Siz ro'yxatdan muvafaqiyatli o'tdingiz");
          setIsLoading(false);
        }

        setUserName("");
        setUserEmail("");
        setUserPassword("");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  const addAccount = () => {
    getAccount();
  };

  return (
    <div className="SignUp">
      <div className="container">
        <img src="/imgs/signUpImg.png" alt="" />
        <div className="addAcaunt-card">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoading(true);
              addAccount();
            }}
            action=""
          >
            <input
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="Name"
              type="name"
              required
            />
            <input
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              placeholder="Email or Phone Number"
              type="email"
              required
            />
            <input
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              placeholder="Password"
              type="password"
              required
            />
           <button 
            className={`addAccauntBtn ${isLoading ? 'loading' : ''}`}
            onClick={
              
              ()=>{  setIsLoading(true);
              addAccount();
              handleClick()
            
          
            }
            }
            
            disabled={isLoading}
        >
            <span>Create Account</span>
            <div className="spinner"></div>
        </button>
            <button className="googleAccaunt">
              <FcGoogle className="FcGoogle" /> Sign up with Google
            </button>
            <p>
              Already have account?{" "}
              <Link to={"/login"}>
                <span className="clickLogin">Log in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
