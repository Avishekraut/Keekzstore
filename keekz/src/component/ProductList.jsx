import React from 'react';
import AddToCartBtn from './AddToCartBtn';
import img from '../images/electroorange.jpg'

function ProductList() {
  return (
    <section>
    <div className='product-details'>
       <img src={img} alt=''></img>
       <h2 className='product-details-title'>JORDAN 1 HIGH ELECTRO ORANGE</h2>
       <AddToCartBtn />
    </div>
    </section>
  );
}

export default ProductList;
