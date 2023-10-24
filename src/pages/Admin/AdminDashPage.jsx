import React from 'react';
import SideMenu from '../../component/Admin/SideMenu';
import { Outlet } from 'react-router-dom';

const AdminDashPage = () => {

    return (
        <div className='flex'>
            <SideMenu />
            <div className='p-3'>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminDashPage;