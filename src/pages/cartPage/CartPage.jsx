import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

import IconButtonLoading from "../../components/iconButton/IconButtonLoading";
import ButtonOne from "../../components/Buttons/ButtonOne";

function CartPage({setCartCount}) {
  const [data, setData] = useState(null);

  const cartData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("ShopToken")}`);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://ecommercev01.pythonanywhere.com/order/cart-items/", requestOptions)
      .then((response) => response.json()) 
      .then((result) => {
        setData(result)
        setCartCount(result)  
     
        
      })
      .catch((error) => console.error(error));
  }


const deleteCart=(id)=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${localStorage.getItem("ShopToken")}`);

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`https://ecommercev01.pythonanywhere.com/order/remove-from-cart?cart_item_id=${id}`, requestOptions)
  .then((response) => response.text())
  .then((result) => {
    console.log(result)

    cartData()
  })
  .catch((error) => console.error(error));
}
useEffect(() => {
  cartData()
}, []);



  return (
    <div className="cart-page">
      <div className="container">
        <nav className="breadcrumb">
          Bosh sahifa / <span className="breadcrumb-current">Savat</span>
        </nav>

        {data?.cart_items && data.cart_items.length > 0 ? (
          <>
            <div className="cart-table-wrapper">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Mahsulot</th>
                    <th>Narx</th>
                    <th>Miqdor</th>
                    <th>Jami</th>
                    <th>O'chirish</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.cart_items?.map((item) => (
                    <tr key={item.id}>
                      <td className="product-cell">
                        <img
                          src={`https://ecommercev01.pythonanywhere.com/${item.pictures[0]?.file}`}
                          alt={item.title}
                          className="product-img"
                        />
                        <span className="product-title">{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}</span>
                      </td>
                      <td className="price-cell">{item.price} so'm</td>
                      <td>
                        <input
                          type="number"
                          className="quantity-input"
                          min="1"
                          max="99"
                          value={item.quantity}
                          readOnly
                        />
                      </td>
                      <td className="subtotal-cell">{item.subtotal} so'm</td>
                      <td className="delete-cell">
                        <IconButtonLoading
                          icon={<RiDeleteBinLine />} 
                          onClick={() => deleteCart(item.id)}
                        />                  
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-bottom">
              <div className="cart-actions">
                <div className="coupon-form">
                  <input
                    type="text"
                    placeholder="Kupon kodi"
                    className="coupon-input"
                  />
                  <button className="red-btn">Kupon qo'llash</button>
                </div>
              </div>

              <div className="cart-summary">
                <h2>Savat jami</h2>
                <div className="summary-line">
                  <span>Jami:</span>
                  <span>{data?.total_price} so'm</span>
                </div>
                <div className="summary-line">
                  <span>Yetkazib berish:</span>
                  <span>Bepul</span>
                </div>
                <div className="summary-total">
                  <span>Umumiy:</span>
                  <span>{data?.total_price} so'm</span>
                </div>
                <Link to={"/checkout"}>
                  <button className="red-btn checkout-btn">To'lovga o'tish</button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="cart-empty">
            <h2>Savat bo'sh</h2>
            <p>Siz hali hech qanday mahsulot qo'shmadingiz</p>
            <Link to="/" >
            <ButtonOne title={"Do'konga o'tish"} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
