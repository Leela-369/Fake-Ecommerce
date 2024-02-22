import { combineReducers } from "redux";
import { productReducer } from "../Redux/Productreducer";
import {cartReducer} from '../Redux/Cartreducer';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    allProducts: productReducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

