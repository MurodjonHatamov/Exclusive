import React from 'react'
import "./CheckOut.css"
function CheckOut() {
  return (
    <div className='CheckOut'>


<div className="container">
<div className="breadcrumb">
        <span>Account</span> / <span>My Account</span> / <span>Product</span> / 
        <span>View Cart</span> / <span className="active">CheckOut</span>
      </div>

      <h1 className="page-title">Billing Details</h1>
<form action="">
    <div className="form-columns">
        <div className="form-column">
            <div className="form-group">
            <label className="required">First Name</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Company Name</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Street Address*</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Town/City*</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Phone Number*</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            
            <div className="form-group">
            <label className="required">Email Address*</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className=" checkboxDiv">
              <input className='checkBoxInp'
                type="checkbox"
                required
              />
              <label className="required">Save this information for faster check-out next time</label>
            </div>
        </div>
        <div className="form-column">
        <div className="order-summary">
          <div className="order-items">
            <div className="order-item">
                <div className="orderImg">
                    <img src="/imgs/cardImg.png" alt="" />
                    <span>LCD Monitor</span>
                </div>
           
              <span>$650</span>
            </div>
            <div className="order-item">
                <div className="orderImg">
                    <img src="/imgs/cardImg.png" alt="" />
                    <span>LCD Monitor</span>
                </div>
           
              <span>$650</span>
            </div>
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-row grand-total">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div></div>
        </div>
    </div>
</form>



</div>




    </div>
  )
}

export default CheckOut