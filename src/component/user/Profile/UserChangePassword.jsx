import { useTheme } from '@emotion/react';
import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const UserChangePassword = () => {
    const theme = useTheme()
    return (
        <div>
            <form action='' method="post" >
                <Box sx={{ width: '50ch' }} className="my-2" >

                    <TextField label="Current PassWord" className='w-full' />
                </Box>
                <Box sx={{ width: '50ch' }} className="my-2" >

                    <TextField label="New PassWord" className='w-full' />
                </Box>
                <Box className="my-2">
                    <Button
                        className={`${theme.palette.btnBgColor} `}
                        variant={`${theme.palette.btnVariant}`}
                        color={theme.palette.mode === 'dark' ? 'secondary' : "primary"}
                    >
                        save password
                    </Button>
                </Box>


            </form>
        </div>
    );
}

export default UserChangePassword;
