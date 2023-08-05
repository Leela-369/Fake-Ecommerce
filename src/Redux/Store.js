import { combineReducers } from "redux";
import { productReducer } from "./Productreducer";
import { cartReducer } from "./Cartreducer";
import { createStore } from "redux";


const rootReducer = combineReducers({
    allProducts: productReducer,
    cart: cartReducer,
})

export const Store  = createStore(rootReducer)