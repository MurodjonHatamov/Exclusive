import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-subscribe">
          <h2 className="footer-logo">Exclusive</h2>
          <span className="footer-title">Obuna bo'ling</span>
          <p className="footer-text">Birinchi buyurtmangizda 10% chegirma oling</p>
          <div className="footer-email">
            <input placeholder='Emailingizni kiriting' type="email" />
            <img src="/imgs/yuborish.svg" alt="" />
          </div>
        </div>
        
        <div className="footer-section footer-support">
          <span className="footer-title">Qo'llab-quvvatlash</span>
          <p className="footer-text">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          <span className="footer-phone">+88015-88888-9999</span>
        </div>
        
        <div className="footer-section footer-links">
          <span className="footer-title">Mening hisobim</span>
          <ul>
            <li><Link to="/my-account">Mening hisobim</Link></li>
            <li><Link to="/login">Kirish / Ro'yxatdan o'tish</Link></li>
            <li><Link to="/cart">Savat</Link></li>
            <li><Link to="/wishlist">Sevimlilar</Link></li>
            <li><Link to="/">Do'kon</Link></li>
          </ul>
        </div>
        
        <div className="footer-section footer-legal">
          <span className="footer-title">Qoidalar</span>
          <ul>
            <li><a href="#">Maxfiylik siyosati</a></li>
            <li><a href="#">Foydalanish shartlari</a></li>
            <li><a href="#">FAQ</a></li>
            <li><Link to="/contact">Bog'lanish</Link></li>
          </ul>
        </div>
        
        <div className="footer-section footer-app">
          <span className="footer-title">Ilovani yuklab oling</span>
          <p className="footer-text">Ilova orqali $3 tejashing faqat yangi foydalanuvchilar uchun</p>
          <div className="footer-qr">
            <img src="/imgs/footerImgQr.png" alt="QR Code" />
            <div className="footer-store-links">
              <img src="/imgs/footer_linkSvg.svg" alt="App Store" />
              <img src="/imgs/footer_linkSvg2.svg" alt="Google Play" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Exclusive. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  )
}

export default Footer