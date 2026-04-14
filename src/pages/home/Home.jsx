  import React, { useEffect, useState } from "react";
  import "./Home.css";
  import { FaApple } from "react-icons/fa";
  import AOS from 'aos';
  import 'aos/dist/aos.css'; 
  // swiper import
  import { Swiper, SwiperSlide } from "swiper/react";
  import 'swiper/css';

  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import { Autoplay, Pagination, Navigation } from "swiper/modules";
  import ProdactCard from "../../components/prodactCard/ProdactCard";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import CardCategory from "../../components/cardCategory/CardCategory";

import ButtonOne from "../../components/Buttons/ButtonOne";
import Section4 from "../../components/homeSections/section4/Section4";

  function Home({ data ,setModalActiv,dataCategory, getData,wishlistDataFunk}) {

const [view,setview]=useState(true)
    
const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 10,
    minutes: 59,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, days, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { hours, days, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])




    return (
      <div className="Home">
        <div className="hero">
          <div className="container">
            





            
          <div className="category-menu">
      <ul>
    
    
{
dataCategory ? (   dataCategory?.map((item, index) => (
  <Link key={index} to={`/categories/${item?.id}`}> 
    <li >
  <img src={item?.image} alt={item?.title} />

  <span>{item?.title}</span>

  <FaChevronRight className="chevron-icon" />
</li>
</Link>
   ))): (  <div className="BoxUndefined">
    {
      [1,1,1,1,1,1].map((item)=>{
    return     <div style={{
      width: '200px',
      height: '30px',
      
      }} className="gradient-placeholder">
      
      </div>
      })
    }
    

    </div>)
}
   
      </ul>



    </div>

            <div className="main-banners-container">
              <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
            
               {
                [1,2,3,4,5].map((item,i)=>{
return <>
    <SwiperSlide key={i}>
                  <div className="main-banner">
                    <div className="banner-content">
                      <p  className="series">
                        <FaApple className="brand-logo" /> iPhone 14 Seriyasi
                      </p>
                      <h1 className="discount-text">10% gacha chegirma</h1>
                      <button className="shop-now-btn">Xarid qilish →</button>
                    </div>
                    <div className="banner-image">
                      <img src="/imgs/hero_img.png" alt="iPhone" />
                    </div>
                  </div>
                </SwiperSlide>
</>
                })
               }
              </Swiper>
            </div>
          </div>
        </div>

        <main>




          <section className="section1">
            <div className="container">
              <span > 
                <img src="/imgs/scetion_svg.svg" alt="" />
                Bugun
              </span>
              <div className="discountPeriod-box">
                <h1>Fleshka Sotuv</h1>
                <div className="countdown-timer">
                  <div className="time-box">
                    <span className="label">Kun</span>
                    <span className="value">{String(timeLeft.days).padStart(2, '0')}</span>
                  </div>
                  <span className="separator">:</span>
                  <div className="time-box">
                    <span className="label">Soat</span>
                    <span className="value">{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <span className="separator">:</span>
                  <div className="time-box">
                    <span className="label">Daqiqa</span>
                    <span className="value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <span className="separator">:</span>
                  <div className="time-box">
                    <span className="label">Soniya</span>
                    <span className="value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>

              <div className="prodactCards">
                <Swiper
                    loop={false}
                  spaceBetween={30}
                  slidesPerView={4}
                  centeredSlides={false}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProdactCard wishlistDataFunk={wishlistDataFunk} getData={getData} item={item} setModalActiv={setModalActiv}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
             
              </div>
            </div>
          </section>



          <section className="section2">
            <div className="container">
              <span >
                <img src="/imgs/scetion_svg.svg" alt="" />
                Kategoriyalar
              </span>
              <h1>Kategoriyalar bo'yicha</h1>

              <div   className="category-boxs">
              {dataCategory?.map((item, index) => (
       <Link key={index} to={`/categories/${item?.id}`}>
         <CardCategory img={item?.image} title={item?.title} />
                </Link>
        ))}
               
              </div>
            </div>
          </section>
          <section className="section3">
            <div className="container">
              <span >
                <img src="/imgs/scetion_svg.svg" alt="" />
                Bu oy
              </span>
              <div className="best">
                <h1> Eng ko'p sotilgan mahsulotlar</h1>
          
              </div>
              <div className="prodactCards">
                <Swiper
                  loop={false}
                spaceBetween={30}
                slidesPerView={4}
                centeredSlides={false}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                  {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProdactCard wishlistDataFunk={wishlistDataFunk} getData={getData} item={item} setModalActiv={setModalActiv}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
          <section className="section4">
         <div className="container">
           <Section4/>
         </div>
        </section>


          <section className="section5">
            <div className="container">
              <span >
                <img src="/imgs/scetion_svg.svg" alt="" />
                Mahsulotlarimiz
              </span>
              <h1>Mahsulotlarimizni o'rganing</h1>
              <div className="prodactCards1">
              {data?.slice(0, view ? 8 : data.length).map((item) => (
  <ProdactCard wishlistDataFunk={wishlistDataFunk} key={item.id} getData={getData} setModalActiv={setModalActiv} item={item} />
))}

              </div>
            
              <ButtonOne onClick={()=>setview(!view)} variant="contained" disableElevation={true} title={view ? "Barchasini ko'rish" : "Kamroq ko'rish"} />
            
            </div>



          </section>
          <section className="section6">
            <div className="container">
              <span >
                <img src="/imgs/scetion_svg.svg" alt="" />
                Tanlangan
              </span>
              <h1>Yangi kelganlar</h1>
              <div className="newArial">
                <img src="/imgs/section6_img.png" alt="" />
                <img src="/imgs/section6_img1.png" alt="" />
              </div>
            </div>
          </section>
          <section className="section7">
            <div   className="container">
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
        </main>
      </div>
    );
  }

  export default Home;
