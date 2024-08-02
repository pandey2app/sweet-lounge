import { GET_CART_SUCCESS } from "../constants/cart.constant";

const initialState = {
    currentCart : localStorage.getItem("currentCart") ? JSON.parse(localStorage.getItem("currentCart")):[]
}
export const  cartReducer = (state = initialState, action )=>{
    switch (action.type) {
        case GET_CART_SUCCESS:
            localStorage.setItem("currentCart",JSON.stringify(action.payload))
        return{
            ...state,
            currentCart: [...action.payload]
        }
        default:
            return state;
    }
}