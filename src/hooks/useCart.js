import { useDispatch, useSelector } from "react-redux";
import { addCartStart, getCartStart } from "../redux/actions/cart.action";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const initialCart = {
    cartItems: [],
    subTotal: 0,
    taxAmount: 0,
    discount: 0,
    grandTotal: 0,
};

export const useCart = () => {
    const cartFromState = useSelector((state) => state.cart.currentCart);
    
    const [cartState, setCartState] = useState(cartFromState.id ? {...cartFromState} : initialCart);
    

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCartStart())
    }, [dispatch]);

    const addToCart = (product, quantity = 1) => {
        const newProduct = {...product}
        const updatedCartItems = [...cartState.cartItems];
        
        const existingProductIndex = updatedCartItems.findIndex((item) => item.id === newProduct.id);
        console.log(existingProductIndex);
        
        

        if (existingProductIndex > -1) {
            console.log(updatedCartItems);
            
            updatedCartItems[existingProductIndex].quantity += quantity;
        } else {
            newProduct.quantity = quantity;
            updatedCartItems.push({...newProduct});
        }

        const subTotal = updatedCartItems.reduce((total, item) => item.price * item.quantity + total, 0);
        const taxAmount = subTotal * cartState.tax; 
        const grandTotal = subTotal + taxAmount - cartState.discount;

        const updatedCart = {
            ...cartState,
            cartItems: updatedCartItems,
            subTotal,
            taxAmount,
            grandTotal,
        };

        setCartState(updatedCart);
        
        dispatch(addCartStart(updatedCart));
        setTimeout(()=>navigate('/cart'),500)
    };

    return [cartState, addToCart];
};
