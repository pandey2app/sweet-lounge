import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <CircularProgress />
            {/* Optionally, you can add a loading message */}
            {/* <p style={{ marginLeft: '10px' }}>Loading...</p> */}
        </div>
    );
};

export default Loader;
