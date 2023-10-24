import React from 'react';
import AddCategory from '../../component/Admin/AddCategory/Index';
import { Typography } from '@mui/material';

const AddCategoryPage = () => {
    return (
        <div>
            <Typography sx={{ width: "100%" }} variant="h5" color="inherit" >Add New Category</Typography>

            <AddCategory/>
        </div>
    );
}

export default AddCategoryPage;
