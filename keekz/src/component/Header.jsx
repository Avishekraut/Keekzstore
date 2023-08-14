import React from 'react'
import '../css/style.css'
import logo from '../images/logo.png'
import searchIcon from '../images/svgs/Search.svg'
import userIcon from '../images/svgs/User.svg'
import bag from '../images/svgs/shopping-bag.svg'
import menu from '../images/svgs/menu.svg'

const Header = () => {
  return (
    <section>
      <header>
        <div className="nav-names">
            <h1 className='names'>New Drops</h1>
            <h1 className='names'>Men</h1>
            <h1 className='names'>Women</h1>
            <img src={menu} alt="" />
        </div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-icons">
            <img src={searchIcon} alt="" className='search-icon'/>
            <img src={userIcon} alt="" className='user-icon'/>
            <img src={bag} alt="" className='bag-icon'/>
        </div>
        </header>
    </section>
  )
}

export default Header
