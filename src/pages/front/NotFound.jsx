import React from 'react';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ResponsiveButton from '../../components/ResponsiveButton';

const NotFound = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-[400px] text-center text-red-600 bg-orange-300">
            <h1 className="text-6xl md:text-8xl w-52 h-52 rounded-full bg-orange-400 relative font-bold "><span className='absolute top-12 left-6 transition'>404</span></h1>
            <p className="text-xl my-6  bg-orange-400 font-mono px-10 py-2">Page Not Found</p>
            <ResponsiveButton
                name={'Go To Home'}
                variant="contained" 
                startIcon={<Home />} 
                onClick={handleHomeClick}
                className="py-5 text-lg"
            />
        </div>
    );
}

export default NotFound;
