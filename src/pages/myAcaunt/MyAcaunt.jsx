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
          <span>Home</span> / <span className="current">My Account</span>
        </div>

        <div className="welcome-text">
          Welcome! <span className="highlight">{ first_name +" "+ last_name}</span>
        </div>

        <div className="profile-container">
          <div className="sidebar">
            <h4>Manage My Account</h4>
            <ul>
              <li className="active">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>

            <h4>My Orders</h4>
            <ul>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>

            <h4>My Wishlist</h4>
          </div>

          <div className="profile-form">
            <h3>Edit Your Profile</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input onInput={(e)=>{
                  setFirst_name(e.target.value)
                }} value={first_name} type="text" placeholder="Md" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input onInput={(e)=>{
                  setLast_name(e.target.value)
                }}  value={last_name} type="text" placeholder="Rimel" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                onInput={(e)=>{
                  setemail_or_phone(e.target.value)
                }} 
                  value={email_or_phone}
                  type="email"
                  placeholder="rimel111@gmail.com"
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input onInput={(e)=>{
                  setAddress(e.target.value)
                }}  value={address} type="text" placeholder="Kingston, 5236, United State" />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input onInput={(e)=>{
                  setPhone(e.target.value)
                }}   type="text" placeholder="+998...." />
              </div>
            </div>

            <h4>Password Changes</h4>
     
            <div className="form-group">
              <input onInput={(e)=>{
                  setPassword(e.target.value)
                }}  placeholder="New Password" type="password" />
            </div>
            <div className="form-group">
              <input placeholder="Confirm New Password" type="password" />
            </div>

            <div className="form-actions">
              <button className="cancel-btn">Cancel</button>
              <button onClick={()=>{
                EditProfile()
              }} className="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAcaunt;
