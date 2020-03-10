import styled from 'styled-components';

export const CartButton = styled.a`
  display: inline-block;
  border-radius: 0.6rem;
  padding: 0.4rem 0.4rem;
  margin: 1rem 1rem;
  width: 8rem;
  background: #4ea0f8;
  color: var(--mainWhite) !important;
  border: 2px solid white;
  text-align: center;
  border: 0.1rem solid var(--mainWhite);
  transition: all 0.3s ease-in-out;
  &:hover{
    background: white;
    color: var(--DarkBlue) !important;
  }
`;

export const ButtonContainer = styled.a`
  display: inline-block;
  border-radius: 0.4rem;
  padding: 0.4rem 0.4rem;
  margin: 2rem 1rem 1rem 0;
  background: white;
  color: ${props => props.cart ? "var(--mainYellow) !important" : "var(--lightBlue) !important"};
  border: 0.1rem solid var(--lightBlue);
  border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover{
    background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite) !important;
}
`;