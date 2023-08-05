import React from "react";
import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to="/">Shop</StyledLink>
          </Typography>
          <StyledLink to="/cart">
            <Badge badgeContent={cartItems.length} color="secondary">
             <AddShoppingCartIcon/>My Cart Baby
            </Badge>
          </StyledLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};
