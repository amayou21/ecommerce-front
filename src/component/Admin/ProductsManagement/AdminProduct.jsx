import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, useTheme, IconButton, Paper } from '@mui/material';
import { Link } from 'react-router-dom'
import img3 from '../../../images/img3.png'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const labels = {
//     0.5: 'Useless',
//     1: 'Useless+',
//     1.5: 'Poor',
//     2: 'Poor+',
//     2.5: 'Ok',
//     3: 'Ok+',
//     3.5: 'Good',
//     4: 'Good+',
//     4.5: 'Excellent',
//     5: 'Excellent+',
// };

// const getLabelText = (value) => {
//     return labels[value];
// };

const AdminProduct = () => {
    const theme = useTheme();

    return (

        <Paper className="rounded-md shadow-2xl" >

            <CardContent >
                <div className='flex justify-between'>
                    <IconButton aria-label="" onClick={() => { alert("delete product") }}>
                        <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>
                    <IconButton aria-label="" >
                        <EditNoteIcon />
                    </IconButton>
                </div>
                <Link to='/product/:id'>
                    <img
                        src={img3}
                        alt="desc"
                        width="auto"
                    />
                </Link>

                <Typography variant="p" color="text.secondary" className='px-2'>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                <div className='flex justify-between '>
                    <Typography variant="h6" color="orange">4.5</Typography>

                    <Typography variant="h6" color="inherit">250 $</Typography></div>
            </CardContent>
        </Paper>

    );
}

export default AdminProduct;
