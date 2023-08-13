import React from 'react'
import '../css/style.css'
import searchIcon from '../images/svgs/Search.svg'
import userIcon from '../images/svgs/User.svg'
import cart from '../images/svgs/cart.svg'

const Header = () => {
  return (
    <header>
        <div className="nav-names">
            <h1>New Drops</h1>
            <h1>Men</h1>
            <h1>Women</h1>
        </div>
        <div className="logo">
            {/* <img src={logo} alt="" /> */}
        </div>
        <div className="nav-icons">
            <img src={searchIcon} alt="" className='search-icon'/>
            <img src={userIcon} alt="" className='user-icon'/>
            <img src={cart} alt="" className='cart-icon'/>
        </div>
    </header>
  )
}

export default Header