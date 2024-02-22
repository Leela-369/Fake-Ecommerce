import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredProducts = products.filter((product) => {
    if (categoryFilter === "all" && priceFilter === "all") {
      return true;
    }
    if (categoryFilter !== "all" && priceFilter === "all") {
      return product.category === categoryFilter;
    }
    if (categoryFilter === "all" && priceFilter !== "all") {
      return product.price <= parseInt(priceFilter);
    }
    return (
      product.category === categoryFilter &&
      product.price <= parseInt(priceFilter)
    );
  });

  const categories = ["All", "Men's Clothing", "Jewelry", "Electronics", "Women's Clothing"];
  const prices = ["All", "10", "20", "30"];

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const handlePriceChange = (price) => {
    setPriceFilter(price);
  };

  return (
    <Container>
      <Sidebar>
        <FilterContainer>
          <FilterLabel>Category:</FilterLabel>
          {categories.map((category) => (
            <CategoryLabel key={category}>
              <CategoryCheckbox
                value={category}
                checked={categoryFilter === category}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </CategoryLabel>
          ))}
          <FilterLabel>Price:</FilterLabel>
          {prices.map((price) => (
            <CategoryLabel key={price}>
              <CategoryCheckbox
                value={price}
                checked={priceFilter === price}
                onChange={() => handlePriceChange(price)}
              />
              {price === "All" ? "All" : `${price}$`}
            </CategoryLabel>
          ))}
        </FilterContainer>
      </Sidebar>
      <ProductContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <CustomLink to={`/product/${product.id}`}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductCategory>{product.category}</ProductCategory>
              </ProductContent>
            </CustomLink>
          </ProductCard>
        ))}
      </ProductContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 500px;
  padding: 10px;
  height: 500px;
  position: relative;
  background-color: #f0f0f0;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 15px;
`;

const CategoryCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 5px;
`;

const CategoryLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
`;

// const FilterSelect = styled.select`
//   padding: 5px;
//   border-radius: 4px;
// `;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 5vh;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const ProductContent = styled.div`
  margin-top: 8px;
`;

const ProductTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ProductPrice = styled.div`
  font-size: 14px;
  color: #888888;
`;

const ProductCategory = styled.div`
  font-size: 12px;
  color: #888888;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;
