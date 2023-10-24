import React from 'react';
import AddBrand from '../../component/Admin/AddBrand/Index';
import Typography from '@mui/material/Typography'

const AddBrandPage = () => {
    return (
        <div >
            <Typography sx={{ width: "100%" }} variant="h5" color="inherit" >Add New Brand</Typography>

            <AddBrand />
        </div>
    );
}

export default AddBrandPage;
