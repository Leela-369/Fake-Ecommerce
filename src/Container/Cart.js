import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Actions";
import styled from "styled-components";

const CartContainer = styled.div`
  border: 1px solid #ccc;
  max-width: 50vw;
  width: 100%;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Added to center the item details */
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const CartImage = styled.img`
  width: 120px; /* Increased the width of the image */
  height: 80px; /* Increased the height of the image */
  object-fit: contain;
  margin-right: 10px;
`;

const CartPrice = styled.p`
  border: 1px solid #ccc;
  background-color: yellow;
  padding: 5px;
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const NoItemsMessage = styled.p`
  margin-top: 30vh;
  font-size: 30px;
  text-align: center;
  font-style: italic;
  color: #999;
`;

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <NoItemsMessage>No items in the cart</NoItemsMessage>
      ) : (
        <CartContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartImage src={item.image} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <CartPrice>Price: ${item.price}</CartPrice>
                <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </RemoveButton>
              </div>
            </CartItem>
          ))}
        </CartContainer>
      )}
    </div>
  );
};

export default Cart;
