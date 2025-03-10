import React from 'react';
import {Link} from "react-router-dom";
import PayPalButton from './PayPallButton';

export default function CartTotals({value, history}) {
  const{cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/cart">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal: </span>
              <strong>€ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax: </span>
              <strong>€ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title text-danger">total: </span>
              <strong className="text-danger">€ {cartTotal}</strong>
            </h5>
            <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>
          </div>
        </div>
      </div>
    </div>
  )
}
