import Link from "next/link";
import styled from "styled-components";
import React, { useCallback } from "react";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 2rem;
  background-color: azure;
  height: 50px;
  align-items: center;
`;
const CartCount = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: white;
  position: absolute;
  top: -10px;
  right: -4px;
  border-radius: 55%;
  background-color: red;
  cursor: pointer;
`;
const HeaderLink = styled.a`
  position: relative;
`;

const header = (props) => {
  const { cartItems, openCart, cartState } = props;
  function ShopOrCart() {
    if (!cartState) {
      return "Chris Shop";
    } else {
      return cartItems.length + " Items in Cart";
    }
  }
  return (
    <Header>
      <Link href="/">
        <a>Products</a>
      </Link>{" "}
      <Link href="/">
        <a>{ShopOrCart()}</a>
      </Link>
      <Link href="/">
        <HeaderLink onClick={openCart} className="icon-shopping_cart">
          <CartCount>{cartItems.length}</CartCount>
        </HeaderLink>
      </Link>
    </Header>
  );
};

export default header;
