import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  // Filter the products based on category and price
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
      product.category === categoryFilter && product.price <= parseInt(priceFilter)
    );
  });

  // Get unique categories from the products
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      <FilterButton onClick={handleFilterClick}>Filter</FilterButton>
      {showFilters && (
        <FilterContainer>
          <FilterLabel>Category:</FilterLabel>
          <FilterSelect
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </FilterSelect>
          <FilterLabel>Price:</FilterLabel>
          <FilterSelect
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="10">10$</option>
            <option value="20">20$</option>
            <option value="30">30$</option>
          </FilterSelect>
        </FilterContainer>
      )}
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
    </div>
  );
};

const FilterButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 5px 10px;
  cursor: pointer;
  width: 100%;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  margin-right: 15px;
`;

const FilterSelect = styled.select`
  padding: 5px;
  border-radius: 4px;
`;

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
  height: 200px; /* Adjust the height as needed */
  object-fit: contain; /* Ensure the image fits within the container without distortion */
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

export default ProductComponent;
