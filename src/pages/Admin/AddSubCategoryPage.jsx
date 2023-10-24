import React from 'react';
import AddSubCategory from '../../component/Admin/AddSubCategory/Index'
import Typography from '@mui/material/Typography'
const AddSubCategoryPage = () => {
    return (
        <div>
            <Typography variant="h5" color="inherit" className='py-3'>Add SubCategory</Typography>
            <AddSubCategory />
        </div>
    );
}

export default AddSubCategoryPage;
