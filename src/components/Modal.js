import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { openedModal, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!openedModal) {
            return null;
          }
          else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center">
                      <SuccessMessage>
                        <h5 className="text-success"><strong>Product added to the cart</strong></h5>
                      </SuccessMessage>
                      <img src={img} className="img-fluid" alt="product" />
                      <h4 className="text-title">{title}</h4>
                      <h5 className="text-muted"><strong>price : € {price}</strong></h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Continue shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}

      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    border-radius: 0.5rem;
    box-shadow: 0.5px 0.5px 5px 0px rgba(0,0,0,0.2);
    background: var(--mainWhite);
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1.5rem;
`