import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Toolbar } from '@mui/material';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const data = [
    { name: "Order Management", link: "/order-management" },
    { name: "Products Management", link: "/products-management" },
    { name: "Add Brand", link: "/add-brand" },
    { name: "Add Category", link: "/add-category" },
    { name: "Add Subcategory", link: "/add-sub-category" },
    { name: "Add Product", link: "/add-product" },
]

const SideMenu = () => {

    const navigate = useNavigate()

    return (
        <div>
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
                <Divider />
                <List>
                    {data.map((val, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => { navigate(`/admin${val.link}`) }}>
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
export default SideMenu;