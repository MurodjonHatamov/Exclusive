import React from 'react'
import "./About.css"
import { AiOutlineShop } from 'react-icons/ai'
import { LuCircleDollarSign } from 'react-icons/lu'
import { VscGift } from 'react-icons/vsc'
import { TbBrandTwitter, TbMoneybag } from 'react-icons/tb'
import { FaInstagram } from 'react-icons/fa'
import { RiLinkedinLine } from 'react-icons/ri'
function About() {
  return (
    <div className='about'>
<section className="about_hero">
    <div className="container">
    <p>Bosh sahifa / <span>Haqida</span></p>
<div className="aboutTeg-cards">
<div className="aboutTeg-card_title">
    <h1>Bizning tarix</h1>
    <p>2015-yil ishga tushirilgan Exclusive Janubiy Osiyoning eng yaxxi online shopping platformasi hisoblanadi. Bangladeshda faol ishtirok etadi. Turli xil marketing, ma'lumot va xizmatlar yordamida Exclusive 10,500 ta sotuvchi va 300 ta brendga ega va 3 milliondan ortiq mijozlarga xizmat ko'rsatadi. <br /> <br />
    Exclusiveda 1 milliondan ortiq mahsulotlar mavjud va tez o'sib bormoqda. Exclusive turli xil kategoriyalarda keng assortiment taklif etadi.
    </p>
</div>

<div className="aboutTeg-card_img">
    <img src="/imgs/about_img.png" alt="" />
</div>
</div>
    </div>
</section>

<section className="aboutSec1">
<div className="container">
<div className="aboutCardsResult">
<div className="aboutCardResult">
<div className="aboutCardResult_imgCard">
<AiOutlineShop className='aboutCardResult_icon'/>
</div>
<span>10.5k </span>
<p>Sotuvchilar</p>
</div>
<div className="aboutCardResult">
<div className="aboutCardResult_imgCard">

<LuCircleDollarSign className='aboutCardResult_icon'/>
</div>
<span>33k</span>
<p>Oylik savdo</p>
</div>
<div className="aboutCardResult">
<div className="aboutCardResult_imgCard">

<VscGift  className='aboutCardResult_icon'/>
</div>
<span>45.5k</span>
<p>Faol mijozlar</p>
</div>
<div className="aboutCardResult">
<div className="aboutCardResult_imgCard">

<TbMoneybag className='aboutCardResult_icon'/>
</div>
<span>25k</span>
<p>Yillik savdo</p>
</div>
    </div>
</div>
</section>

<section className="aboutSec2">
    <div className="container">
<div className="about_UserCards">
<div className="about_UserCard">
<div className="about_UserCardImg">
    <img src="/imgs/aboutSec2_img1.png" alt="" />
</div>
<h2>Tom Cruise</h2>
<p>Asoschi va Rais</p>
<ul className="aboutLink">
<li><a href="#"><TbBrandTwitter/></a></li>
<li><a href="#"><FaInstagram/></a></li>
<li><a href="#"><RiLinkedinLine/></a></li>
</ul>
</div>
<div className="about_UserCard">
<div className="about_UserCardImg">
    <img src="/imgs/aboutSec2_img2.png" alt="" />
</div>
<h2>Emma Watson</h2>
<p>Boshqaruvchi</p>
<ul className="aboutLink">
<li><a href="#"><TbBrandTwitter/></a></li>
<li><a href="#"><FaInstagram/></a></li>
<li><a href="#"><RiLinkedinLine/></a></li>
</ul>
</div>
<div className="about_UserCard">
<div className="about_UserCardImg">
    <img src="/imgs/aboutSec2_img3.png" alt="" />
</div>
<h2>Will Smith</h2>
<p>Mahsulot Dizayneri</p>
<ul className="aboutLink">
<li><a href="#"><TbBrandTwitter/></a></li>
<li><a href="#"><FaInstagram/></a></li>
<li><a href="#"><RiLinkedinLine/></a></li>
</ul>
</div>

</div>
    </div>
</section>
<section className="section7">
          <div className="container">

<div className="box7">
  <img src="/imgs/section7_svg.svg" alt="" />
  <h3>TEZKOR YETKAZIB BERISH</h3>
  <p>140$ dan yuqori buyurtmalar bepul yetkaziladi</p>
</div>
<div className="box7">
  <img src="/imgs/section7_svg1.svg" alt="" />
  <h3>24/7 QO'LLAB QUVVATLASH</h3>
  <p>Doimiy va do'stona qo'llab quvvatlash</p>
</div>
<div className="box7">
  <img src="/imgs/section7_svg2.svg" alt="" />
  <h3>PULNI QAYTARISH KAFOLATI</h3>
  <p>30 kun ichida pulni qaytarish</p>
</div>

          </div>
        </section>
    </div>
  )
}

export default About