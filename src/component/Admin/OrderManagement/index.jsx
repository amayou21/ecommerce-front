import React from 'react';
import OrderCard from './OrderCard';
import Typography from '@mui/material/Typography'

const Index = () => {
    return (
        <>
        <Typography variant="h5" color="inherit" className='py-2'>Ordrer managemet</Typography>
        <div className='grid drid-clos-1'>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </div>
        </>
    );
}

export default Index;
