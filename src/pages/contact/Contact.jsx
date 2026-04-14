import React from 'react'
import "./Contact.css"
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'
function Contact() {
  return (
    <div className='contact container'>

 <div className="kontakt-container">
      <div className="kontakt-sections">
        <div className="kontakt-section">
          <div className="section-header">
            <FaPhone className="section-icon" />
            <h2>Bizga qo'ng'iroq qiling</h2>
          </div>
          <p>Biz 24/7, 7 kun davomida mavjudmiz.</p>
          <p className="kontakt-info">Telefon: +880181112222</p>
          <div className="divider"></div>
        </div>

        <div className="kontakt-section">
          <div className="section-header">
            <FaEnvelope className="section-icon" />
            <h2>Yozing</h2>
          </div>
          <p>Formani to'ldiring va 24 soat ichida siz bilan bog'lanamiz.</p>
          <p className="kontakt-info">Email: customer@exclusive.com</p>
          <p className="kontakt-info">Email: support@exclusive.com</p>
        </div>
      </div>

      <form className="kontakt-form">
        <div className="form-row">
          <div className="form-group">
           
            <input placeholder='Ismingiz *' type="text" id="name" required />
          </div>
          <div className="form-group">
            
            <input placeholder='Emailingiz *' type="email" id="email" required />
          </div>
          <div className="form-group">
          
            <input placeholder='Telefoningiz *' type="tel" id="phone" required />
          </div>
        </div>

        <div className="form-group">
         
          <textarea placeholder='Xabar' id="message" rows="5"></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <FaPaperPlane className="submit-icon" /> Xabar yuborish
        </button>
      </form>
    </div>



    </div>
  )
}

export default Contact