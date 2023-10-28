import React from 'react';
import AddProduct from '../../component/Admin/AddProduct/Index'
import Typography from '@mui/material/Typography'
const AddProductPage = () => {
    return (
        <div>
            <Typography variant="h5" color="inherit">Add New Product</Typography>
            <AddProduct/>
        </div>
    );
}

export default AddProductPage;
