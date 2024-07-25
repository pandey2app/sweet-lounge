import { GET_PRODUCT_SUCCESS,} from "../constants/product.constant";

const initialState = {
    products : localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")):[]
}
export const  productReducer = (state = initialState, action )=>{
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            localStorage.setItem("products",JSON.stringify(action.payload))
        return{
            ...state,
            products: [...action.payload]
        }
        // case UPDATE_PRODUCT_SUCCESS:
        //     localStorage.setItem("products",JSON.stringify(action.payload.product))
        // return{
        //     ...state,
        //     products: [...action.payload.product]
        // }
        // case DELETE_PRODUCT_SUCCESS:
        //     console.log(action.payload);
        //     localStorage.setItem("products",JSON.stringify(action.payload))
        // return{
        //     ...state,
        //     products: [...action.payload]
        // }
        default:
            return state;
    }
}