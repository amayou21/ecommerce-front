import React from 'react';
import Profile from '../../component/user/Profile'
import Typography from '@mui/material/Typography'
import UserChangePassword from '../../component/user/Profile/UserChangePassword';
const ProfilePage = () => {
    return (
        <div>
            <Typography variant="h5" color="inherit">Profile</Typography>
            <Profile />
            <UserChangePassword/>
        </div>
    );
}

export default ProfilePage;
