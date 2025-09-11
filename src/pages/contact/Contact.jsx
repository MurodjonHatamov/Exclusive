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
            <h2>Call To Us</h2>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p className="kontakt-info">Phone: +880181112222</p>
          <div className="divider"></div>
        </div>

        <div className="kontakt-section">
          <div className="section-header">
            <FaEnvelope className="section-icon" />
            <h2>Write To Us</h2>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p className="kontakt-info">Email: customer@exclusive.com</p>
          <p className="kontakt-info">Email: support@exclusive.com</p>
        </div>
      </div>

      <form className="kontakt-form">
        <div className="form-row">
          <div className="form-group">
           
            <input placeholder='Your Name *' type="text" id="name" required />
          </div>
          <div className="form-group">
            
            <input placeholder='Your Email *' type="email" id="email" required />
          </div>
          <div className="form-group">
          
            <input placeholder='Your Phone *' type="tel" id="phone" required />
          </div>
        </div>

        <div className="form-group">
         
          <textarea placeholder='Your Message' id="message" rows="5"></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <FaPaperPlane className="submit-icon" /> Send Message
        </button>
      </form>
    </div>




    </div>
  )
}

export default Contact