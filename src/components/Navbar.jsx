import { React, useState } from 'react'
import logo from "../styles/images/logo.svg"
import cart from "../styles/images/icon-cart.svg"
import profile from "../styles/images/profile_icon.png"
import shoes_icon from "../styles/images/image-product-1-thumbnail.jpg"
import icon_delete from "../styles/images/icon-delete.svg"
import "../styles/css/navbar.css"

function Navbar() {

    const [shopcart, showShoppingCart] = useState(false)
    const showCart = () => showShoppingCart(true)

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
                <img src={cart} alt="cart-icon" width="20px" height="20px" onClick={() => showCart()}/>
                <img src={profile} className="img-profile" alt="profile-icon" width="50px" height="50px" />
            </div>
      </div>
      {
        shopcart && 
        (
            <div className='shopping-cart-design'>
                <div className='shoppping-cart-box'>
                    <div className='cart-title'>Cart</div>
                    <hr />  
                    <div className='cart-price-section'>
                        <img src={shoes_icon} alt="Shoes-Icon" className='shoes-icon' height="60px" width="60px"  />
                        <div className='cart-price'>
                            <span className='cart-price-title'>Fall Limited Edition Sneakers</span>
                            <span className='cart-calculated-price'>$125.00 x 3 <span className='final-price'>$375.00</span></span>
                        </div>
                        <div className='cart-icon'>
                            <img src={icon_delete} alt="icon-delete" className='cart-icon-delete' />
                        </div>
                    </div>
                    <div className='btn-cart-checkout'>
                        <button className='cart-checkout'> 
                            <span className='cart-checkout-text'>Checkout</span> 
                        </button> 
                    </div>
                </div>
            </div>
        ) 
      }
      </>
  )
}

export default Navbar