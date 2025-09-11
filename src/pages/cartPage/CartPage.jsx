import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { Link } from "react-router-dom";

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
    <>
      <div className="container">
        <div className="cart-page">
          <nav className="breadcrumb">
            Home / <span className="breadcrumb-current">Cart</span>
          </nav>

          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {data?.cart_items?.map((item) => (
                  <tr key={item.id}>
                    <td className="product-cell">
                      <div onClick={()=>{
                        deleteCart(item.id)
                      }} className="delete">
                        <span>x</span>
                      </div>
                      <img
                        src={`https://ecommercev01.pythonanywhere.com/${item.pictures[0]?.file}`}
                        alt={item.title}
                        className="product-img"
                      />
                      {item.title}
                    </td>
                    <td>{item.price}</td>
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
                    <td>{item.subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="shop-buttons">
            <button className="outline-btn">Return To Shop</button>
            <button className="outline-btn">Update Cart</button>
          </div>

          <div className="cart-bottom">
            <div className="cart-actions">
              <div className="coupon-form">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="coupon-input"
                />
                <button className="apply-btn">Apply Coupon</button>
              </div>
            </div>

            <div className="cart-summary">
              <h2>Cart Total</h2>
              <div className="summary-line">
                <span>Subtotal:</span>
                <span>{data?.total_price}</span>
              </div>
              <div className="summary-line">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span>{data?.total_price}</span>
              </div>
              <Link to={"/checkout"}>
                <button className="checkout-btn">Proceed to checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
