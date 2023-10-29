import React, { useId, useState } from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Multiselect from 'multiselect-react-dropdown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CircleIcon from '@mui/icons-material/Circle';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const Index = () => {
    const [Category, setCategory] = useState('');
    const [Brand, setBrand] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const handleBrand = (event) => {
        setBrand(event.target.value);
    };

    const [data, setData] = useState()
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        setData(e.target.value)

        // Read the form data
        const form = e.target;
    }
    const postTextAreaId = useId();
    const theme = useTheme()

    return (
        <div className='flex justify-center items-center '>
            <div className='m-8'>
                <form method="post" onSubmit={handleSubmit}>
                    <Box>
                        <Typography variant="h5" color="inherit">Upload You're Product Image</Typography>
                        <IconButton
                            component="label"
                            variant="contained"
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent', // Set the background color to transparent on hover
                                },
                            }}
                        >
                            <CloudUploadIcon sx={{ fontSize: "150px" }} />
                            <VisuallyHiddenInput type="file" />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        className="my-3 flex "

                    >
                        <TextField label="Product Name" sx={{ width: '50ch' }} />

                    </Box>
                    {/* <UnstyledTextareaIntroduction /> */}
                    <Box sx={{ width: '50ch' }}>
                        <textarea
                            // slate-700
                            className='w-full p-2 rounded bg-inherit focus:outline-none focus:border-2 focus:border-blue-300 border  hover:border-current '
                            name="descreption"
                            placeholder='descreption'
                        />
                    </Box>
                    <Box sx={{ width: '50ch' }} className="my-2">
                        <TextField
                            className='w-full'
                            id="outlined-number"
                            label="Price Befor Descount"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box sx={{ width: '50ch' }} className="my-2">
                        <TextField
                            className='w-full'
                            id="outlined-number"
                            label="Product Price"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box sx={{ width: '50ch' }} className="my-3">
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
                    <Box sx={{ width: '50ch' }}>
                        <Multiselect

                            disablePreSelectedValues
                            displayValue="key"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={function noRefCheck() { }}
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}
                            options={[
                                {
                                    cat: 'Group 1',
                                    key: 'Option 1'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Option 2'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Option 3'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 4'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 5'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 6'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 7'
                                }
                            ]}
                        // selectedValues={[
                        //     {
                        //         cat: 'Group 1',
                        //         key: 'Option 1'
                        //     },
                        //     {
                        //         cat: 'Group 1',
                        //         key: 'Option 2'
                        //     }
                        // ]}
                        />
                    </Box>
                    <Box sx={{ width: '50ch' }} className="my-3">
                        <FormControl fullWidth sx={{ width: '50ch' }}>
                            <InputLabel variant="outlined" id="dsub-category">Brand</InputLabel>
                            <Select
                                labelId="ddsub-category-label"
                                id="dsub-category"
                                value={Brand}
                                label="Category"
                                onChange={handleBrand}
                            >
                                <MenuItem value={10}>Brand 1</MenuItem>
                                <MenuItem value={20}>Brand 2</MenuItem>
                                <MenuItem value={30}>Brand 3</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>
                    <Box className='flex items-center my-2'>
                        <Typography variant="div" color="inherit " >Disponible Colors : </Typography>
                        <IconButton >
                            <CircleIcon sx={{ color: 'red' }} />
                        </IconButton>
                        <IconButton >
                            <CircleIcon sx={{ color: 'yellow' }} />
                        </IconButton>
                        <IconButton >
                            <CircleIcon sx={{ color:'black' }} />
                        </IconButton>
                        <IconButton>
                            <AddCircleIcon />
                        </IconButton>

                    </Box>
                    <Box>

                        <Button
                            className={`${theme.palette.btnBgColor}`}
                            variant={`${theme.palette.btnVariant}`}
                            color={theme.palette.mode === 'dark' ? 'secondary' : "primary"}
                        >
                            add product
                        </Button>
                    </Box>
                </form>
                {/* 

                </Box>




                
                <Box sx={{ width: '50ch' }}>
                    <textarea
                        className='w-full bg-inherit border-1 border-current p-2'
                        id={postTextAreaId}
                        name="description"
                        placeholder='descreption'
                    />
                <TextField
                    sx={{ width: '50ch' }}
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                </Box>
                <Button
                    className={`${theme.palette.btnBgColor}`}
                    variant={`${theme.palette.btnVariant}`}
                    color={theme.palette.mode === 'dark' ? 'secondary' : "primary"}
                >
                    add product

                </Button> */}
            </div>

        </div>

    );
}

export default Index;
