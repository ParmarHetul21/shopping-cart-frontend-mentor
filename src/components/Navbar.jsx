import React from 'react'
import logo from "../styles/images/logo.svg"
import cart from "../styles/images/icon-cart.svg"
import profile from "../styles/images/profile_icon.png"
import "../styles/css/navbar.css"

function Navbar() {
  return (
      <>
      <div className='navbar'>
            <div className='brand-name'>
                <img src={logo} alt="sneakers" className='big-image-shoes' width="120px" height="25px" />
            </div>
            <div className='nav-links'> 
                <div>Collections</div>
                <div>Men</div>
                <div>Women</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div className='nav-actions'>
                <img src={cart} alt="cart-icon" width="20px" height="20px" />
                <img src={profile} className="img-profile" alt="profile-icon" width="50px" height="50px" />
            </div>
      </div>
      </>
  )
}

export default Navbar