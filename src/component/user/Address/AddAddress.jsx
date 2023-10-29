import React from 'react';
import { useTheme } from '@emotion/react';
import { Box, Button, TextField } from '@mui/material';

const AddAddress = () => {
    const theme = useTheme()
    return (
        <div className='flex justify-center items-center m-8'>
            <form action='' method="post">
                <Box sx={{ width: '50ch' }}>
                    <TextField label="address (house-work place)" className='w-full my-2' />
                </Box>
                <Box sx={{ width: '50ch' }}>
                    <textarea

                        // slate-700
                        className='w-full my-2 p-2 rounded bg-inherit border border-neutral-700 focus:outline-none focus:border-2 focus:border-blue-300 border  hover:border-current '
                        name="descreption"
                        placeholder='descreption of you address'
                    />
                </Box>
                <Box sx={{ width: '50ch' }}>
                    <TextField label="Phone Number" className='w-full my-2' />

                </Box>
                <Box className="my-2">
                    <Button
                        className={`${theme.palette.btnBgColor}`}
                        variant={`${theme.palette.btnVariant}`}
                        color={theme.palette.mode === 'dark' ? 'secondary' : "primary"}
                    >
                        add address

                    </Button>

                </Box>



            </form>
        </div>
    );
}

export default AddAddress;
