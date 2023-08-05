export const ActionTypes = {
    SET_PRODUCTS : "SET_PRODUCTS",
    SELETCTED_PRODUCTS : "SELETCTED_PRODUCTS",
    REMOVE_SELETCTED_PRODUCTS : "REMOVE_SELETCTED_PRODUCTS",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",

}

export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (product) => {
    return{
        type: ActionTypes.SELETCTED_PRODUCTS,
        payload: product,
    }
}

export const addToCart = (product) => {
    return {
      type: ActionTypes.ADD_TO_CART,
      payload: product,
    };
  };
  
  // Add a new action creator for removing items from the cart
  export const removeFromCart = (productId) => {
    return {
      type: ActionTypes.REMOVE_FROM_CART,
      payload: productId,
    };
  };