import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSideBar from '../../component/user/UserSideBar';

const UserDashPage = () => {

    return (
        <div className='flex'>
            <UserSideBar />
            <div className='p-3 w-full'>
                <Outlet />
            </div>
        </div>
    );
}

export default UserDashPage;