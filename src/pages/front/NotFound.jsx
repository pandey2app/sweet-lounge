import React from 'react';
import { Button } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mb-6">Page Not Found</p>
            <Button 
                variant="contained" 
                color="primary" 
                startIcon={<Home />} 
                onClick={handleHomeClick} 
                className="px-6 py-3 text-lg"
            >
                Go to Home
            </Button>
        </div>
    );
}

export default NotFound;
