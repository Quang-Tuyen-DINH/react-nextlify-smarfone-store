import styled from 'styled-components';

export const ButtonContainer = styled.a`
  display: inline-block;
  border-radius: 6px;
  padding: 0.4rem 0.4rem;
  margin: 0.5rem 1rem;
  width: 8rem;
  background: white;
  border: 2px solid white;
  text-align: center;
  border: 0.1rem solid var(--lightBlue);
  transition: all 0.3s ease-in-out;
  &:hover{
    background: #4ea0f8;
    color: var(--mainWhite) !important;
  }
`;