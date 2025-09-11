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
    <p>Home / <span>About</span></p>
<div className="aboutTeg-cards">
<div className="aboutTeg-card_title">
    <h1>Our Story</h1>
    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /> <br />
    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
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
<p>Sallers active our site</p>
</div>
<div className="aboutCardResult">
<div className="aboutCardResult_imgCard">

<LuCircleDollarSign className='aboutCardResult_icon'/>
</div>
<span>33k</span>
<p>Mopnthly Produduct Sale</p>
</div>
<div className="aboutCardResult">
<div className="aboutCardResult_imgCard">

<VscGift  className='aboutCardResult_icon'/>
</div>
<span>45.5k</span>
<p>Customer active in our site</p>
</div>
<div className="aboutCardResult">
<div className="aboutCardResult_imgCard">

<TbMoneybag className='aboutCardResult_icon'/>
</div>
<span>25k</span>
<p>Anual gross sale in our site</p>
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
<p>Founder & Chairman</p>
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
<p>Managing Director</p>
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
<p>Product Designer</p>
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
  <h3>FREE AND FAST DELIVERY</h3>
  <p>Free delivery for all orders over $140</p>
</div>
<div className="box7">
  <img src="/imgs/section7_svg1.svg" alt="" />
  <h3>24/7 CUSTOMER SERVICE</h3>
  <p>Friendly 24/7 customer support</p>
</div>
<div className="box7">
  <img src="/imgs/section7_svg2.svg" alt="" />
  <h3>MONEY BACK GUARANTEE</h3>
  <p>We reurn money within 30 days</p>
</div>

          </div>
        </section>
    </div>
  )
}

export default About