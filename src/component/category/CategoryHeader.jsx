import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const CategoryHeader = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    return (
        <Box sx={{ maxWidth: { xs: "100%", sm: "100%" } }}  >
            <Tabs
            // centered={true}
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                <Tab label="All" />
                <Tab label="Elictronic" />
                <Tab label="Clothing" />
                <Tab label="Discounts" />
            </Tabs>
        </Box>

    );
}
export default CategoryHeader