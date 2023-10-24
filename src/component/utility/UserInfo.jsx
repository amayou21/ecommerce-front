import React, { useState } from 'react';
import Typography from '@mui/material/Typography'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const UserInfo = () => {
    const [OrderStatus, setOrderStatus] = useState('');

    const handleChange = (event) => {
        setOrderStatus(event.target.value);
    };
    return (
        <>
            <div >

                <Typography variant="h4" color="inherit">User Info
                </Typography>
                <div className=' ml-1  p-3'>
                    <table>
                        <tbody>
                            <tr>
                                <td className='px-2'><b>Full Name</b></td>
                                <td>: <span style={{ color: "blue" }}>Amaguar Youssef</span></td>
                            </tr>
                            <tr>
                                <td className='px-2'><b>Phone Number</b></td>
                                <td>: <span style={{ color: "blue" }}>+212 624587963</span></td>
                            </tr>
                            <tr>
                                <td className='px-2'><b>Email</b></td>
                                <td>: <span style={{ color: "blue" }}>youssef.ecom@gmail.com</span></td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div >

            <div className='py-3'>
                <Typography variant="h4" component="div" color="inherit" className='py-2 flex justify-center'> totale : 256$</Typography>
                <div className='flex justify-center' >
                    <Paper
                        component="form"
                        sx={{ display: "flex", alignItems: 'center', width: 600 }}
                    >


                        <FormControl fullWidth >
                            <InputLabel variant="outlined" id="demo-simple-select-label">Order Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={OrderStatus}
                                label="Order Status"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>In Progress</MenuItem>
                                <MenuItem value={20}>Done</MenuItem>
                                <MenuItem value={30}>Cancel</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                    <Button color="primary" sx={{ p: '10px', ml: '2px' }} variant='contained' endIcon={<SendIcon />}>
                        save
                    </Button>
                </div>
            </div>
        </>
    );
}
export default UserInfo;
