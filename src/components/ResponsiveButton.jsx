import React from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';

const ResponsiveButton = ({name, variant, startIcon, endIcon, onClick, className, fullWidth}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Button
            variant={variant}
            endIcon={endIcon??''}
            startIcon={startIcon??''}
            size={isSmallScreen ? 'small' : 'medium'}
            onClick={onClick}
            fullWidth={fullWidth}
            className={`${className} ${isSmallScreen ? 'h-8 text-sm' : ''}`}
        >
            {name}
        </Button>
    );
};

export default ResponsiveButton;
