import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Index = () => {
    const theme = useTheme()
    const [Category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <div className='flex justify-center items-center'>
            <div className='m-8'>

                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    className="my-3 flex "

                >
                    <TextField label="Sub Category Name" sx={{ width: '50ch' }} />

                </Box>
                <Box className="my-3">
                    <FormControl fullWidth sx={{ width: '50ch' }}>
                        <InputLabel variant="outlined" id="dsub-category">Category</InputLabel>
                        <Select
                            labelId="ddsub-category-label"
                            id="dsub-category"
                            value={Category}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Category 1</MenuItem>
                            <MenuItem value={20}>Category 2</MenuItem>
                            <MenuItem value={30}>Category 3</MenuItem>
                        </Select>
                    </FormControl>

                </Box>
                <Box>

                <Button
                    className={`${theme.palette.btnBgColor}`}
                    variant={`${theme.palette.btnVariant}`}
                    color={theme.palette.mode === 'dark' ? 'secondary' : "primary"}
                >
                    add subcategory
                </Button>
                </Box>
            </div>

        </div>
    );
}

export default Index;
