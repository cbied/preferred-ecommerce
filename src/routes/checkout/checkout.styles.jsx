import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 550px) {
    width: auto;
    margin: 5px auto 0;
    min-height: 70vh;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
      width: 8%;
  }
`;

export const NoItemsInCart = styled.h3`
  width: 100%;
  font-size: 3rem;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid darkgrey;
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  padding-bottom: 2rem;
`;