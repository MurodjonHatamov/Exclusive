import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';


function SignUp() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  const getAccount = () => {
    if (!userName || !userEmail || !userPassword) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

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
        if (result?.email_or_phone && result.email_or_phone[0]) {
          toast.error(result.email_or_phone[0]);
          setIsLoading(false);
        } else {
          toast.success("Siz ro'yxatdan muvafaqiyatli o'tdingiz");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Xatolik yuz berdi");
        setIsLoading(false);
      });
  };

  return (
    <div className="SignUp">
      <div className="container">
        <img src="/imgs/signUpImg.png" alt="" />
        <div className="addAcaunt-card">
          <h1>Hisob yaratish</h1>
          <p>Ma'lumotlaringizni kiriting</p>
          
          <form onSubmit={(e) => { e.preventDefault(); getAccount(); }}>
            <TextField
              fullWidth
              variant="filled"
              label="Ism"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              label="Email yoki telefon raqam"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
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
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
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
              className="addAccauntBtn"
              variant="contained"
              fullWidth
              onClick={getAccount}
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
                "Hisob yaratish"
              )}
            </Button>

            <p className="login-link">
              Hisobingiz bormi?{" "}
              <Link to="/login">
                <span>Kirish</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;