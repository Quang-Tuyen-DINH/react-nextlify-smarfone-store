import React from 'react';
import CartItem from './CartItem.js';

export default function CartList({value}) {
  const {cart} = value;
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.index} item={item} value={value} />
      })}
    </div>
  )
}
