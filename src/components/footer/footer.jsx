import React from 'react'
import './Footer.scss'
import Wlogo from './img/asaxiy-logo-white.svg'
import Store from './img/app-store.svg'
import Play from './img/google-play.svg'
import Tell from './img/asaxiy-apps.png'
import Phone from './img/call-outline.svg'
import Sms from './img/chatbox-outline.svg'
import Map from './img/location-outline.svg'
import Face from './img/logo-facebook.svg'
import Insta from './img/logo-instagram.svg'
import Yt from './img/logo-youtube.svg'
import Wf from './img/logo-rss.svg'


const Footer = () => {
  return (
    <React.Fragment>
      <div className="foot">
        <div className="footer">
          {/* footer-header */}
          <div className="footer__header">
            <div className="footer__logos">
              <div className="footer__wrap">
                {/* white-logo */}
                <div className="footer__logo">
                  <img src={Wlogo} alt="logo" />
                </div>
                {/* description */}
                <div className="footer__text">
                  <h2>Sizning internet do'koningiz</h2>
                </div>
                {/* app */}
                <div className="footer__app">
                  <img src={Store} alt="picture" />
                  <img src={Play} alt="picture" />
                  <img src={Store} alt="picture" />
                </div>
              </div>
              {/* telefon */}
              <div className="footer__tell">
                <img src={Tell} alt="picture" />
              </div>
            </div>
          </div>
        </div>

        {/* hero */}

        <div className="foot__hero">
          {/* block */}
          <div className="foot__block">
            {/* contentchalar */}
            <div className="foot__box"> {/*content1*/}
              <div><img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="Icon" /></div>
              <div>
                <h2>Endi bozorga borishga hojat yo'q</h2>
                <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
              </div>
            </div>

            <div className="foot__box"> {/*content2*/}
              <div><img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="Icon" /></div>
              <div>
                <h2>Tez yetkazib berish</h2>
                <p>Bizning xizmatimiz sizni ajablantiradi</p>
              </div>
            </div>

            <div className="foot__box"> {/*content3*/}
              <div><img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="Icon" /></div>
              <div>
                <h2>Siz uchun qulayliklar</h2>
                <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
              </div>
            </div>

            <div className="foot__box"> {/*content4*/}
              <div><img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="Icon" /></div>
              <div>
                <h2>Bolib to'lash</h2>
                <p>6 yoki 12oy davomida oldindan to'lov yo'q</p>
              </div>
            </div>

          </div>
        </div> {/*the end*/}

        <div className="foot__food">
          {/* information */}
          <div className="foot__info">
            {/* information title */}
            <div className="foot__t"><h2>Ma'lumotlar</h2></div>
            {/* information texts */}
            <div className="foot__m">
              <p>Ko'p so'raladigon savollar</p>
              <p>Olib ketish punkiti</p>
              <p>Blog</p>
              <p>Ommaviy oferta (Foydalanuvchi bitimi)</p>
              <p>Muddatli to'lov asosoida sotib olishning umumiy qoidalari</p>
              <p>Biz haqimizda</p>
            </div>
          </div> {/*end*/}

          {/* aloqa */}
          <div className="foot__aloqa">
            {/* aloqa title */}
            <div className="foot__t"><h2>Biz bilan aloqa</h2></div>
            {/* aloqa texts */}
            <div className="foot__m">
              <p> <img src={Phone} alt="icon" width={25} /> +998 71 200 01 05 </p>
              <p> <img src={Sms} alt="icon" width={25} /> info@asaxiy.uz </p>
              <p> <img src={Map} alt="icon" width={25} /> Islom Karimov, 49, Toshkent </p>
            </div>
            {/* kitob dokonlar locotsiyasi */}
            <div className="foot_t2"><h2>Kitob do'konlarimiz</h2></div>
            {/* kitob texts */}
            <div className="foot__m"><p><img src={Map} alt="icon" width={25} /> Asaxiy Novza </p>
              <p><img src={Map} alt="icon" width={25} /> Asaxiy Farhod bozori </p>
              <p><img src={Map} alt="icon" width={25} /> Asaxiy Panorama, Kitob olami </p></div>
          </div> {/*end*/}

          {/* social media */}
          <div className="foot__t">
            {/* social media title */}
            <div className="foot_t"><h2>Erishgan yutuqlarimiz</h2></div>
            {/* sm texts */}
            <div className="foot__m">
              <p>"Tagsin" mukofoti</p>
              <p>"Shuhrat" medali</p>
              <p>"Kelajak bunyodkori" medali</p></div>

            {/* SMM */}
            <div className="foot_t2"><h2>Bizni Ijtimoiy tarmoqlarda</h2></div>
            {/* SMM logos */}
            <div className="foot__logo-s">
              <img src={Face} alt="icon" width={25} />
              <img src={Insta} alt="icon" width={25} />
              <img src={Yt} alt="icon" width={25} />
              <img src={Wf} alt="icon" width={25} />
            </div>
          </div> {/*end*/}

          {/* to'lov */}
          <div className="foot__t">
            <div className="foot_t"><h2>To'lov turlari</h2></div>
            {/* kartalar */}
            <div className="foot__karta">
              <div className="foot__carta">
                <img src="https://asaxiy.uz/custom-assets/images/uzum.svg" alt="picture" />
              </div>
              <div className="foot__carta">
                <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="picture" />
              </div>
              <div className="foot__carta">
                <img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="picture" />
              </div>
              <div className="foot__carta">
                <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="picture" />
              </div>
              <div className="foot__carta">
                <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="picture" />
              </div>
              <div className="foot__carta">
                <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="picture" />
              </div>
            </div>
          </div> {/*end*/}
        </div>

      </div>
    </React.Fragment>
  )
}

export default Footer