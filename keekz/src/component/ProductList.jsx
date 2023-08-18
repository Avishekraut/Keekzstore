import React from 'react';
import AddToCartBtn from './AddToCartBtn';

function ProductList(props) {
  return (
    <div className='product-details'>
       <img src={require(`../images/${props.value.image}`)} alt=''></img>
       <h2 className='product-details-title'>{props.value.name}</h2>
       <h2 className='product-details-price'>{`$ ${props.value.price}`}</h2>
       <AddToCartBtn />
    </div>
  );
}

export default ProductList;
