import React, { useEffect, useState } from "react";
import "./MyAcaunt.css";
import { toast } from "react-toastify";

function MyAcaunt() {
  const [email_or_phone, setemail_or_phone] = useState(null);
  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState(null);

  const getData = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("ShopToken")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/user/detail/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
      
        setFirst_name(result.first_name)
       setemail_or_phone(result?.email_or_phone)
       setLast_name(result?.last_name)
       setAddress(result?.address)
      })
      .catch((error) => console.error(error));
  };


const EditProfile=()=>{
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("ShopToken")}`);

const raw = JSON.stringify({
  "first_name": first_name,
  "last_name": last_name,
  "email": email_or_phone,
  "phone": phone,
  "address": address,
  "password": password
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://ecommercev01.pythonanywhere.com/user/update-profile/", requestOptions)
  .then((response) => response.json())
  .then((result) => {

    toast.success("Malumotlaringiz yangilandi")
  })
  .catch((error) => console.error(error));
}


  useEffect(() => {
    getData();
  }, []);

  return (
<div className="profile">
      <div className="container">
        <div className="breadcrumb">
          <span>Bosh sahifa</span> / <span className="current">Mening hisobim</span>
        </div>

        <div className="welcome-text">
          Xush kelibsiz! <span className="highlight">{ first_name +" "+ last_name}</span>
        </div>

        <div className="profile-container">
          <div className="sidebar">
            <h4>Hisobimni boshqarish</h4>
            <ul>
              <li className="active">Mening profilim</li>
              <li>Manzillar</li>
              <li>To'lov usullarim</li>
            </ul>

            <h4>Buyurtmalarim</h4>
            <ul>
              <li>Qaytarishlarim</li>
              <li>Bekor qilishlarim</li>
            </ul>

            <h4>Sevimlilar ro'yxati</h4>
          </div>

          <div className="profile-form">
            <h3>Profilni tahrirlash</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Ism</label>
                <input onInput={(e)=>{
                  setFirst_name(e.target.value)
                }} value={first_name} type="text" placeholder="Ism" />
              </div>
              <div className="form-group">
                <label>Familiya</label>
                <input onInput={(e)=>{
                  setLast_name(e.target.value)
                }}  value={last_name} type="text" placeholder="Familiya" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                onInput={(e)=>{
                  setemail_or_phone(e.target.value)
                }} 
                  value={email_or_phone}
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-group">
                <label>Manzil</label>
                <input onInput={(e)=>{
                  setAddress(e.target.value)
                }}  value={address} type="text" placeholder="Manzil" />
              </div>
              <div className="form-group">
                <label>Telefon raqam</label>
                <input onInput={(e)=>{
                  setPhone(e.target.value)
                }}   type="text" placeholder="+998...." />
              </div>
            </div>

            <h4>Parolni o'zgartirish</h4>
      
            <div className="form-group">
              <input onInput={(e)=>{
                  setPassword(e.target.value)
                }}  placeholder="Yangi parol" type="password" />
            </div>
            <div className="form-group">
              <input placeholder="Yangi parolni tasdiqlash" type="password" />
            </div>

            <div className="form-actions">
              <button className="cancel-btn">Bekor qilish</button>
              <button onClick={()=>{
                EditProfile()
              }} className="save-btn">Saqlash</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAcaunt;
