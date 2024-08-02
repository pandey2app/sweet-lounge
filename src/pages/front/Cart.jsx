import React, { useState } from 'react';
import { Button, Typography, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { Delete } from '@mui/icons-material';

const Cart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 50, quantity: 2 },
        { id: 2, name: 'Product 2', price: 30, quantity: 1 },
        { id: 3, name: 'Product 3', price: 20, quantity: 3 },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
    };

    const handleRemoveItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
                <List>
                    {cart.map(item => (
                        <ListItem key={item.id} divider>
                            <ListItemText
                                primary={item.name}
                                secondary={`Price: $${item.price} x ${item.quantity}`}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="remove" onClick={() => handleRemoveItem(item.id)}>
                                    <Delete />
                                </IconButton>
                                <Button variant="contained" size="small" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                                <Button variant="contained" size="small" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h5" gutterBottom>Total: ${totalPrice}</Typography>
                <Button variant="contained" color="primary">Proceed to Checkout</Button>
            </div>
        </section>
    );
};

export default Cart;
