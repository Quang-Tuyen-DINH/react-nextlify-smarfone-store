import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              {/* product infos */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product"/>
                </div>
                {/* product description */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2 className="text-title"><strong>{title}</strong></h2>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h5>
                  <h4 className="text-danger">
                    <strong>price: <span>€</span>{price}</strong>
                  </h4>
                  <p className="text-muted mt-3 mb-0">
                    {info}
                  </p>
                  <strong>
                    <span></span>
                  </strong>
                  {/* button */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    >
                      {inCart ? 'Already In Cart' : 'add to cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
