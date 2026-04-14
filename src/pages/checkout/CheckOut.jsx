import React from 'react'
import "./CheckOut.css"
function CheckOut() {
  return (
    <div className='CheckOut'>


<div className="container">
<div className="breadcrumb">
        <span>Hisob</span> / <span>Mening hisobim</span> / <span>Mahsulot</span> / 
        <span>Savat</span> / <span className="active">To'lov</span>
      </div>

      <h1 className="page-title">To'lov ma'lumotlari</h1>
<form action="">
    <div className="form-columns">
        <div className="form-column">
            <div className="form-group">
            <label className="required">Ism</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Kompaniya nomi</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Manzil*</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Apartman, qavat va h.k. (ixtiyoriy)</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Shahar/Tuman*</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
            <label className="required">Telefon raqam*</label>
              <input
                type="text"
                name="firstName"
                required
              />
            </div>
            
            <div className="form-group">
            <label className="required">Email manzil*</label>
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
              <label className="required">Bu ma'lumotni keyingi xarid uchun saqlash</label>
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
              <span>Jami:</span>
              <span>$1750</span>
            </div>
            <div className="total-row">
              <span>Yetkazib berish:</span>
              <span>Bepul</span>
            </div>
            <div className="total-row grand-total">
              <span>Umumiy:</span>
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