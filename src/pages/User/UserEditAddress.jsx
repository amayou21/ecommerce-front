import React from 'react';
import Typography from '@mui/material/Typography'
import EditAddress from '../../component/user/Address/EditAddress';

const UserEditAddress = () => {
    return (
        <div>
            <Typography variant="h5" color="inherit"> Edit address</Typography>
            <EditAddress/>
        </div>
    );
}

export default UserEditAddress;
