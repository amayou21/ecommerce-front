import React from 'react';
import AdminNavBar from '../utility/AdminNavBar';
import AdminDrawer from './AdminDrawer'
const AdminPageContainer = () => {
    return (
        <div>
            <AdminNavBar/>
            <AdminDrawer/>
        </div>
    );
}

export default AdminPageContainer;
