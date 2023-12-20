import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import Tolov from './img/tolov.svg'
import Tracker from './img/tracker.svg'
import Language from './img/language.svg'
import Savatcha from './img/savatcha.svg'
import Heart from './img/heart.svg'
import Avatar from './img/avatar.svg'
import Search from './img/search-icon.svg'
import { Link } from 'react-router-dom'
import All from '../category/json/all.json'
import Card from '../content/card/card'

import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState(null)

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.screenY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
    console.log(All);

    useEffect(() => {
      let Filtered = All.filter((item) => {
        return item.name?.toLowerCase().includes(search?.toLowerCase())
      })
      setData(Filtered)
    }, [search, setSearch])
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="wrap1">
          {/* Logo */}
          <div className="wrap1__logo">
            <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="logo" />
          </div>
          {/* Search... */}
          <div className="wrap1__input">
            <input type="search" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />

            <img src={Search} alt="icon" />
            <button>Qidirish</button>
          </div>
          {/* Icons */}
          <div className={click ? 'wrapper__menu active' : "wrap1__icons"}>
            <div className="wrap1__icon">
              <img className='wrap1__tolov' src={Tolov} alt="icon" />
              <p className='wrap1__p'>Tolov</p>
            </div>

            <div className="wrap1__icon">
              <img className='wrap1__trak' src={Tracker} alt="icon" />
              <p className='wrap1__p'>Trak</p>
            </div>

            <div className="wrap1__icon">
              <img className='wrap1__language' src={Language} alt="icon" />
              <p className='wrap1__p'>Language</p>
            </div>

            <div className="wrap1__icon">
              <img className='wrap1__savatcha' src={Savatcha} alt="icon" />
              <p className='wrap1__p'>Savatcha</p>
            </div>

            <div className="wrap1__icon">
              <img className='wrap1__heart' src={Heart} alt="icon" />
              <p className='wrap1__p'>Sevimlilar</p>
            </div>

            <div className="wrap1__icon">
              <img className='wrap1__avatar' src={Avatar} alt="icon" />
              <p className='wrap1__p'>Kabinent</p>
            </div>

          </div>
        </div>

        <hr />

        <div className="wrap2">
          <Link to={"kitob"}>Kitoblar</Link>
          <Link to={"telefon"}>Telefonlar</Link>
          <Link to={"televizor"}>Televizorlar</Link>
          <Link to={"kond"}>Konditsionerlar</Link>
        </div>

        <div className="wrapper__hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: "#008dff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#008dff" }} />
          )}

        </div>
      </div>


      <div className='wrap'>
        {
          data?.map((item, index) => (
            <Card key={index} item={item} />
          ))
        }
      </div>
    </React.Fragment>
  )
}

export default Navbar