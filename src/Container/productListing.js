import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Actions";
import { ProductComponent } from "./ProductComponetnt";

export const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
        console.log("Err", err);
      });
      dispatch(setProducts(response.data));
    };

    fetchProducts();
  }, [dispatch]);

  console.log("products: ", products);

  return (
    <div className="">
      <ProductComponent />
    </div>
  );
};

