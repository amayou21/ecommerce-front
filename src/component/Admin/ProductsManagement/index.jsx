import React from 'react';
import AdminProduct from './AdminProduct';
import Typography from '@mui/material/Typography'

const Index = () => {
    return (
        <>
            <Typography variant="h5" color="inherit" className='py-3'>manage all products</Typography>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
                <AdminProduct />
            </div>
        </>

    );
}

export default Index;
