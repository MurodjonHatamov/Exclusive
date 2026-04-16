import React, { useState } from 'react'
import "./CheckOut.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ButtonOne from '../../components/Buttons/ButtonOne';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { FaTimes } from 'react-icons/fa';
import SkletonComponents from '../../components/skleton/SkletonComponents';
import { useScrollToTop } from '../../hooks/useScrollToTop';

function CheckOut({ cartList, cartCount ,cartData}) {
useScrollToTop()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    address: "",
    apartment: "",
    city: "",
    region: "",
    zip_code: "",
    phone: "",
    email: "",
  });
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [saveInfo, setSaveInfo] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

  };


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

    cartData()

  })
  .catch((error) => console.error(error));
}


  const Ordering=()=>{
if (formData.first_name && formData.last_name && formData.address && formData.city && formData.region && formData.zip_code && formData.phone && formData.email) {
   toast.success("Buyurtma muvaffaqiyatli berildi! Jami pul miqdori: " + total + " so'm");


cartList?.cart_items?.forEach(item => {
  deleteCart(item.id) 

})
   setFormData({
    first_name: "",
    last_name: "",
    company_name: "",
    address: "",
    apartment: "",
    city: "",
    region: "",
    zip_code: "",
    phone: "",
    email: "",
  });
  setCouponCode("");
  setCouponApplied(false);
  setCouponDiscount(0);
  setPaymentMethod("bank");
  setSaveInfo(false);


}
else{
  alert("Iltimos, required maydonlarni to'ldiring");
}

   
    
  }

  console.log(formData);
  

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT40") {
      setCouponApplied(true);
      setCouponDiscount(40);
      toast.success("40% chegirma qo'llanildi!");
    } else if (couponCode === "SALE20") {
      setCouponApplied(true);
      setCouponDiscount(20);
      toast.success("20% chegirma qo'llanildi!");
    } else {
      toast.error("Noto'g'ri kupon kodi!");
    }
  };

  const removeCoupon = () => {
    setCouponCode("");
    setCouponApplied(false);
    setCouponDiscount(0);
    toast.info("Kupon bekor qilindi");
  };

  const subtotal = cartList?.cart_items?.reduce((sum, item) => {
    return sum + (parseFloat(item.subtotal) || 0);
  }, 0) || 0;

  const discountAmount = couponApplied 
    ? Math.round((subtotal * couponDiscount) / 100) 
    : 0;

  const discountedSubtotal = subtotal - discountAmount;

  const shipping = discountedSubtotal > 500000 ? 0 : 25000;
  const total = discountedSubtotal + shipping;

  return (
    <div className='CheckOut'>
      <div className="container">
        <div className="breadcrumb-checkout">
          <Link to="/">Bosh sahifa</Link>
          <FaArrowRight />
          <Link to="/cart">Savat</Link>
          <FaArrowRight />
          <span>Chekaut</span>
        </div>

        <h1 className="page-title">To'lov ma'lumotlari</h1>

        <form action="">
          <div className="form-columns">
            <div className="form-column billing-form">
              <h2>Billing Details</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="required">Ism</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Ismingizni kiriting"
                  />
                </div>
                <div className="form-group">
                  <label className="required">Familiya</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    required
                    placeholder="Familiyangizni kiriting"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Kompaniya nomi</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  placeholder="Kompaniya nomi (ixtiyoriy)"
                />
              </div>

              <div className="form-group">
                <label className="required">Manzil</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Ko'cha manzili"
                />
              </div>

              <div className="form-group">
                <label>Apartman, qavat va h.k.</label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  placeholder="Apartman, qavat (ixtiyoriy)"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="required">Shahar</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Shahar"
                  />
                </div>
                <div className="form-group">
                  <label className="required">Viloyat</label>
                  <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    required
                    placeholder="Viloyat"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="required">Pochta indeksi</label>
                  <input
                    type="text"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleInputChange}
                    required
                    placeholder="Pochta indeksi"
                  />
                </div>
                <div className="form-group">
                  <label className="required">Telefon raqam</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="required">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="email@example.com"
                />
              </div>

              <div className="checkboxDiv">
                <input
                  className='checkBoxInp'
                  type="checkbox"
                  id="saveInfo"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                />
                <label htmlFor="saveInfo">Bu ma'lumotni keyingi xarid uchun saqlash</label>
              </div>
            </div>

            <div className="form-column order-form">
              <div className="order-summary">
                <h2>Buyurtma xulosasi</h2>

                <div className="order-items">
{
cartList?.loading ?(
[1,2,3].map((i)=>{
  return (  <SkletonComponents variant="rectangular" width="100%" height="80px" />)
})


) :cartList?.cart_items.length > 0 ?(    cartList?.cart_items.map((item, index) => (
                      <div className="order-item" key={index}>
                        <div className="orderImg">
                          <div className="img-wrapper">
                            <img 
                              src={`https://ecommercev01.pythonanywhere.com/${item?.pictures?.[0]?.file}`} 
                              alt={item?.title} 
                            />
                            <span className="item-count">{item?.quantity || 1}</span>
                          </div>
                          <span className="item-name">{item?.title}</span>
                        </div>
                        <span className="item-price">
                          {Number(item?.subtotal).toLocaleString()} so'm
                        </span>
                      </div>
                    ))) :
                    
                    (
   <div className="empty-cart">
                      <p>Savatingiz bo'sh</p>
                      <Link to="/">
                        <ButtonOne title="Do'konga o'tish" variant="outlined" />
                      </Link>
                    </div>
)

}

           
                </div>

                <div className="cuponForm">
                  <input 
                    className='cupon-enter' 
                    type="text" 
                    placeholder='Kupon kodini kiriting :DISCOUNT40'
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={couponApplied}
                  />
                  {couponApplied ? (
                    <ButtonOne 
                      title={<FaTimes/>} 
                      onClick={removeCoupon}
                      sx={{ minWidth: 'auto', padding: '10px 15px' }}
                    />
                  ) : (
                    <ButtonOne 
                      title={'Ishlatish'} 
                      onClick={applyCoupon}
                      disabled={!couponCode}
                    />
                  )}
                </div>

                {couponApplied && (
                  <div className="coupon-applied">
                    <IoCheckmarkCircle />
                    <span>{couponDiscount}% chegirma qo'llanildi!</span>
                  </div>
                )}

                <div className="order-totals">
                  <div className="total-row">
                    <span>Jami:</span>
                    <span>{subtotal.toLocaleString()} so'm</span>
                  </div>
                  {couponApplied && (
                    <div className="total-row discount-row">
                      <span>Chegirma ({couponDiscount}%):</span>
                      <span>-{discountAmount.toLocaleString()} so'm</span>
                    </div>
                  )}
                  <div className="total-row">
                    <span>Yetkazib berish:</span>
                    <span className={shipping === 0 ? "free-shipping" : ""}>
                      {shipping === 0 ? "Bepul" : `${shipping.toLocaleString()} so'm`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <div className="free-shipping-note">
                      <IoCheckmarkCircle />
                      <span>500,000 so'm dan yuqori buyurtmalar uchun bepul yetkazib berish!</span>
                    </div>
                  )}
                  <div className="total-row grand-total">
                    <span>Umumiy:</span>
                    <span>{total.toLocaleString()} so'm</span>
                  </div>
                </div>

                <div className="PaymentMethodFrom">
                  <h3>To'lov usuli</h3>
                  <RadioGroup
                    aria-label="payment-method"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <div className="payment-option">
                      <FormControlLabel 
                        value="bank" 
                        control={<Radio sx={{ color: 'black' }} />} 
                        label={
                          <div className="bankMethod">
                            <span>Bank kartasi</span>
                            <img src="/imgs/PaymentMethod.svg" alt="Mastercard" />
                          </div>
                        } 
                      />
                    </div>
                    <div className="payment-option">
                      <FormControlLabel 
                        value="cash" 
                        control={<Radio />} 
                        label="Naqd pul (Yetkazib berishda)" 
                      />
                    </div>
                  </RadioGroup>
                </div>

                <ButtonOne 
                  type="submit"
                  title={'Buyurtma berish'} 
                  fullWidth
                  variant="contained"
                  onClick={Ordering}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckOut
