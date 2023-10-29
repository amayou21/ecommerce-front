import React from 'react';
import AddAddress from '../../component/user/Address/AddAddress';
import { Typography } from '@mui/material';

const UserAddAddressPage = () => {
    return (
        <div>
            <Typography variant="h5" color="inherit"> Add New Address</Typography>
            <AddAddress />
        </div>
    );
}

export default UserAddAddressPage;
