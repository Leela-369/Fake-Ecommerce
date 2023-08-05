import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions";
import styled from "styled-components";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 80vw; /* Adjust the value as needed */
  width: 100%;
`;

const ProductImage = styled.img`
  width: 400px; /* Increase the image width */
  height: auto;
  object-fit: contain;
  margin-right: 20px;
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Add this line to center the content horizontally */
  border-right: 1px solid #ccc;
  padding-right: 20px;
  margin-right: 20px;
  background-color: yellow;
`;

const PriceLabel = styled.h2`
  margin: 0;
`;

const DescriptionContainer = styled.div`
  margin-top: 20px; /* Increase the gap */
`;

const AddToCartButton = styled(Button)`
  && {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: green; /* Add a background color */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: darkgreen; /* Change the hover background color */
    }
  }
`;


const ProductDetails = () => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { id } = useParams();
  const product = useSelector((state) =>
    state.allProducts.products.find((product) => product.id === parseInt(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductDetailsContainer>
        <PriceContainer>
          <PriceLabel>${product.price}</PriceLabel>
        </PriceContainer>
        <h1>{product.title} ({product.category})</h1>
        <DescriptionContainer>
          <h2>Description:</h2>
          <div>{product.description}</div>
        </DescriptionContainer>
        <AddToCartButton onClick={handleAddToCart} startIcon={<AddShoppingCartIcon />}>
          Add to Cart
        </AddToCartButton>
      </ProductDetailsContainer>
    </ProductContainer>
  );
};

export default ProductDetails;
