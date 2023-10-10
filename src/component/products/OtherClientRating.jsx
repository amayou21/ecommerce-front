import { Rating, Stack, Typography } from '@mui/material';
import React from 'react';

const OtherClientRating = () => {
    return (
        <div>
            <div className='flex items-center mt-5'>
                <Typography variant="h5" color="inherit">clien 1</Typography>
                <Stack spacing={1} className='ml-3'>
                    <Rating name="size-large" defaultValue={2} size="small" max={1} />
                </Stack>
                <Typography variant="body1" color="inherit">2.8</Typography>
            </div>

            <Typography variant="p" color="inherit">client comment</Typography>
        </div>
    );
}

export default OtherClientRating;
