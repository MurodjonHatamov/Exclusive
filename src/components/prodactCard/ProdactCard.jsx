import React, { useEffect, useState } from "react";
import "./ProdactCard.css";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function ProdactCard({ item, setModalActiv,getData ,wishlistDataFunk ,likes}) {
  const [discount, setDiscount] = useState(false);
  const [price, setPrice] = useState(null);
  const [disPrice, setDisPrice] = useState(null);
  const [isLiked, setIsLiked] = useState(item?.is_liked);
  const navigate=useNavigate()


  // card malumotlari
  const getInfo = (id) => {
    setModalActiv({ loading: true });

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://ecommercev01.pythonanywhere.com/product/detail/?product_id=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setModalActiv(result);
      })
      .catch((error) => {
        console.error(error);
        setModalActiv(null);
      });
  };



// Chegirma naxrx bor yoqligini tekshiruvchi funksiya
  const priceFun = (item) => {
    if (item?.price == item?.discount_price) {
      setPrice("");
      setDisPrice(item?.price);
    } else {
      setPrice(item?.price);
      setDisPrice(item?.discount_price);
    }
  };




//  yoqtirganlarga qo'shish funksiyasi
  const wishlistAddData=(id)=>{
    const myHeaders = new Headers();
  if (localStorage.getItem("ShopToken")) {
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("ShopToken")}`);
  }
  else{
    navigate("/login")
  }


const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`https://ecommercev01.pythonanywhere.com/action/add-to-wishlist/?product_id=${id}`, requestOptions)
  .then((response) => response.text())
  .then((result) => {
    setIsLiked(true);
    getData()
    wishlistDataFunk()
  })
  .catch((error) => console.error(error));
  }


  // yoqtirganlarda olib tashlash funksiyasi
const deletLike=(id)=>{
  const myHeaders = new Headers();
  if (localStorage.getItem("ShopToken")) {
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("ShopToken")}`);
  }
  else{
    navigate("/login")
  }

  
  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  
fetch(`https://ecommercev01.pythonanywhere.com/action/remove-from-wishlist/?product_id=${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      setIsLiked(false);
      wishlistDataFunk()
      getData()
    })
    .catch((error) => console.error(error));
}


const handleLikeClick = (e) => {
  e.preventDefault();
  wishlistAddData(item.id);
};

const handleUnlikeClick = (e) => {
  e.preventDefault();
  deletLike(item.id);
};




  useEffect(() => {
    priceFun(item);
    setIsLiked(item?.is_liked);
    if (item?.discount_percent == null) {
      setDiscount(true);
    }
  }, [item]);



  return (
    <>
      <Link to={`/onePraduct/${item.id}`}>
        {" "}
        <div className="ProdactCard">
          <div className="prodact-img">
            <img
              src={`https://ecommercev01.pythonanywhere.com${item?.pictures[0]}`}
              alt=""
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                getInfo(item?.id);
              }}
              className="addToCart"
            >
              Add To Cart
            </button>
          </div>
          <div className="prodact-card-title">
            <h4>{item.title}</h4>
            <p>
              <span className="title">{disPrice}</span>
              <del className="old-price">{price}</del>
            </p>
            <div className="star">
              <span>

               
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>(88)</span>
            </div>
            <div className={discount ? "discount activDisc" : "discount"}>
              {item?.discount_percent != null && (
                <span>-{item.discount_percent}%</span>
              )}
            </div>

            <div className="like-box">
              {isLiked || likes ? (
                <button onClick={handleUnlikeClick}>
                  <FaHeart className="likeHeart" style={{ color: "#db4444" }} />
                </button>
              ) : (
                <button onClick={handleLikeClick}>
                  <FaRegHeart className="likeHeart" />
                </button>
              )}
              <button>
                <MdOutlineRemoveRedEye />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProdactCard;
