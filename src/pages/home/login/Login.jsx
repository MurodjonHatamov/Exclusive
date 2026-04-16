import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';

function Login({ getUser, wishlistDataFunk, cartData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const getData = () => {
    if (!email || !password) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    setIsLoading(true);

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
        if (result?.access) {
          localStorage.setItem("ShopToken", result.access);
          toast.success("Muvaffaqiyatli kirdingiz!");
          setTimeout(() => {
            getUser();
            wishlistDataFunk();
            cartData();
            navigate("/");
          }, 1000);
        } else {
          toast.error(result?.detail || "Email yoki parol noto'g'ri");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Xatolik yuz berdi");
        setIsLoading(false);
      });
  };

  return (
    <div className="Login">
      <div className="container">
        <img src="/imgs/signUpImg.png" alt="" />

        <div className="login">
          <h1>Exclusive ga kirish</h1>
          <p>Ma'lumotlaringizni kiriting</p>
          
          <form onSubmit={(e) => { e.preventDefault(); getData(); }}>
            <TextField
              fullWidth
              variant="filled"
              label="Email yoki telefon raqam"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{ shrink: true }}
              sx={{ 
                '& .MuiFilledInput-root': { 
                  borderRadius: '0px',
                  '&:before': { borderBottom: '2px solid #8a8787' },
                  '&:hover:before': { borderBottom: '2px solid #000' },
                  '&:before, &:after': { borderRadius: '0px' }
                }
              }}
            />

            <TextField
              fullWidth
              variant="filled"
              label="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{ 
                '& .MuiFilledInput-root': { 
                  borderRadius: '0px',
                  '&:before': { borderBottom: '2px solid #8a8787' },
                  '&:hover:before': { borderBottom: '2px solid #000' },
                  '&:before, &:after': { borderRadius: '0px' }
                }
              }}
            />

            <Button 
              className="loginBtn"
              variant="contained"
              fullWidth
              onClick={getData}
              disabled={isLoading}
              sx={{ 
                height: '50px',
                fontSize: '16px',
                textTransform: 'none',
                backgroundColor: '#DB4444',
                '&:hover': { backgroundColor: '#c03030' }
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Kirish"
              )}
            </Button>

            <Link to="/signUp">
              <span className="forgot-password">Parolni unutdingizmi?</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;