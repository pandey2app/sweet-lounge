import React, { useState } from 'react';
import { Button, Typography, IconButton, List, ListItem } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart.currentCart);
    const [cartItems, setCartItems] = useState([...cart.cartItems])

    const handleQuantityChange = (id, delta) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto relative">
                <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
                <List>
                    {cartItems.map(item => (
                        <ListItem key={item.id} divider>
                            <div className='w-10 h-10 overflow-hidden rounded-md me-4'>
                                <img src={item.image} alt={item.productName} />
                            </div>
                            <div className='w-full flex justify-between me-4'>
                                <h3 className='text-2xl w-3/12 font-semibold font-serif ms-4'>{item.productName}</h3>

                                <p className='text-left w-2/12 font-semibold text-lg'>{`Price: ${item.price} `} <span className='font-bold'>X</span> {` ${item.quantity}`}</p>

                                <div className='w-52 flex justify-evenly'>
                                    <IconButton edge="end" aria-label="remove" onClick={() => handleRemoveItem(item.id)}>
                                        <Delete />
                                    </IconButton>
                                    <Button variant="contained" size="small" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                                    <Button variant="contained" size="small" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
                <div className='w-6/12 flex justify-between absolute right-16'>
                    <Typography variant="h5" gutterBottom>Total: {totalPrice} INR</Typography>
                    <Button variant="contained" color="primary">Proceed to Checkout</Button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
