import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer>
<div className="container">
    <div className="footer-box">
      <div className="footer-logo">
        <h2>Exclusive</h2>
      </div>
      <span>Subscribe</span>
      <p>Get 10% off your first order</p>
<div className="email">
<input placeholder='Enter your email' type="email" />
<img src="/public/imgs/yuborish.svg" alt="" />
</div>
    </div>
    <div className="footer-box">
      <span>Support</span>
      <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
      <a href="#">exclusive@gmail.com</a>
      <span>+88015-88888-9999</span>

    </div>
<ul className="footer-ul">
  <li><a href="">My Account</a></li>
  <li><a href="">Login / Register</a></li>
  <li><a href="">Cart</a></li>
  <li><a href="">Wishlist</a></li>
  <li><a href="">Shop</a></li>
</ul>
<ul className="footer-ul">
  <li><a href="">Privacy Policy</a></li>
  <li><a href="">Terms Of Use</a></li>
  <li><a href="">FAQ</a></li>
  <li><a href="">Contact</a></li>
</ul> 

<div className="footer-box">
  <span>Download App</span>
  <p>Save $3 with App New User Only</p>
<div className="qr">
<img src="/public/imgs/footerImgQr.png" alt="" />
<img src="/public/imgs/footer_linkSvg.svg" alt="" />

</div>
<img src="/public/imgs/footer_linkSvg2.svg" alt="" />
</div>



</div>
    </footer>
  )
}

export default Footer