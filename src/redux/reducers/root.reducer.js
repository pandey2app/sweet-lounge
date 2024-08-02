import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product.reducer";
import { categoryReducer } from "./category.reducer";
import { userReducer } from "./user.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReducer = combineReducers({
    product : productReducer,
    category : categoryReducer,
    user : userReducer,
    cart : cartReducer
})