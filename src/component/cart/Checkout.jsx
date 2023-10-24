import React from 'react';
import { Button, Typography } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';


import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


const Checkout = () => {
    return (
        <div className=''>
            <div className='flex  items-center '>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="descount code"
                        inputProps={{ 'aria-label': 'descount code ' }}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <SendIcon />
                    </IconButton>
                </Paper>
            </div>

            <div className='flex  items-center '>
                <Paper
                    className='flex justify-center my-3'
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <Typography variant="p" color="inherit" className='py-5'>1202$

                    </Typography>
                </Paper>
            </div>
            <Link to='/order/paymethod'>
                <div className='flex  items-center ' sx={{ p: '2px 4px' }}>

                    <Button variant="contained" sx={{ width: 400 }}>shoping</Button>

                </div>
            </Link>
        </div>
    );
}

export default Checkout;
