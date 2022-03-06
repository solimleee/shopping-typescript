import React from "react";
//styled
import { Wrapper } from "./Item.styles";
import { Button } from "@material-ui/core";
//Types
import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item = ({ item, handleAddToCart }: Props) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <h3>${item.price}</h3>
    <Button onClick = {() => handleAddToCart(item)}>
        Add to cart
        
    </Button>
  </Wrapper>
);

export default Item;
