import React from 'react'
import shoes from "../styles/images/image-product-1.jpg"
import shoes_thumbnail1 from "../styles/images/image-product-1-thumbnail.jpg"
import shoes_thumbnail2 from "../styles/images/image-product-2-thumbnail.jpg"
import shoes_thumbnail3 from "../styles/images/image-product-3-thumbnail.jpg"
import shoes_thumbnail4 from "../styles/images/image-product-4-thumbnail.jpg"


function Section() {
  return (
    <>
    <div className='section-container'>
        <div className='image-container'>
            <img src={shoes} alt="shoes" className='shoes-container' height="520px"  width="450px" />
            <div className='image-thumbnail'>
              <img src={shoes_thumbnail1} alt="shoes_thumbnail" className='sm-shoes-thumbnail' width="95px" height="87px" />
              <img src={shoes_thumbnail2} alt="shoes_thumbnail" className='sm-shoes-thumbnail' width="95px" height="87px" />
              <img src={shoes_thumbnail3} alt="shoes_thumbnail" className='sm-shoes-thumbnail' width="95px" height="87px" />
              <img src={shoes_thumbnail4} alt="shoes_thumbnail" className='sm-shoes-thumbnail' width="95px" height="87px" />
            </div>
        </div>
        <div className='product-description'>
            <div className='product-title'>SNEAKER COMPANY</div>
            <div className='product-type'>
              <span>FALL LIMITED</span>
              <span>SNEAKERS</span>
            </div>
            <div className='product-description'>
              <span>
                These low profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole.They will with stand everything
                the weather can offer.
              </span> 
            </div>
            <div className='product-price'>
              <span className='product-MRP'>$125.00 </span>
              <span className='product-discount'></span>
            </div>
            <div className='original-MRP'>
              <span>$250.00</span>
            </div>
            <div className="cart-actions">
              <div>
                <span className='cart-action-box'>-</span>
                <span className='cart-action-box'>3</span>
                <span className='cart-action-box'>+</span>
              </div>
              <button className='shopping-cart'> 
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFF" fill-rule="nonzero"/></svg> 
                <span className='cart-text'>Add to cart</span> 
              </button> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Section