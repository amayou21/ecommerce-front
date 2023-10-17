import React from 'react';
import AdminNavBar from '../utility/AdminNavBar';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const data = [
    { name: "create product", link: "/create-product" },
    { name: "create brand", link: "/create-brand" },
    { name: "create category", link: "/create-ategory" },
    { name: "reate sub-category", link: "/reate-sub-category" },
    { name: "create manager", link: "/create-manager" },
]
// 'create product', 'create brand', 'create category', 'create sub-category','create manager']

const AdminPageContainer = () => {

    const navigate = useNavigate()

    return (
        <div>
            <AdminNavBar marg={drawerWidth} />
            {/* <CssBaseline />  */}

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider >admin</Divider>
                <List>
                    {data.map((val, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => { navigate(val.link) }}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={val.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box sx={{ display: 'flex',marginLeft:`${drawerWidth}px` }} className=' mt-[56px] md:mt-[64px] xl:mt-[64px] break-all p-2'>
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhnnnnnnnnnnnnnnnnnnnn
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhnnnnnnnnnnnnnnnnnnnn
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhnnnnnnnnnnnnnnnnnnnn yousef yousef yousef yousef yousef
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhnnnnnnnnnnnnnnnnnnnn
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh jjjjjjjjj kkkkkkkkkkkkkkkkkkkk hhnnnnnnnnnnnnnnnnnnnn
            </Box>
        </div>
    );
}

export default AdminPageContainer;
