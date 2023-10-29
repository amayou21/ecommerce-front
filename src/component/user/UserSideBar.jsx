import React from 'react';

import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Toolbar } from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';



const drawerWidth = 240;
const data = [
    { name: "Order Management", link: "/user-orders" },
    { name: "Favorits", link: "/favorits" },
    { name: "Address", link: "/personal-address" },
    { name: "Profile", link: "/profile" },
]


const UserSideBar = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 1,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {data.map((val, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => { navigate(`/user${val.link}`) }}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={val.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}

export default UserSideBar;
