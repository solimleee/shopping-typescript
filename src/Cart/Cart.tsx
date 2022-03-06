import React from "react";
import { Wrapper } from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../App";
import { AddToPhotos } from "@material-ui/icons";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  return (
    <Wrapper>
      <h2>it's your shopping cart!</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
