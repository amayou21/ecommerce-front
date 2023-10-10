import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Textarea from '../utility/Textarea';
import MaxHeightTextarea from '../utility/Textarea';
import UnstyledTextareaIntroduction from '../utility/Textarea';
import OtherClientRating from './OtherClientRating';
const ProductReting = () => {
    return (
        // <Container className='shadow-xl'>
        <Grid item sm={12} xs={12} lg={12} md={12} className='shadow-2xl mt-2'>

            <Container className='mt-6'>
                <div className='flex items-center '>
                    <Typography variant="h5" color="inherit">rating</Typography>
                    <Stack spacing={1} className='ml-3'>
                        <Rating name="size-large" defaultValue={2} size="small" max={1} />
                    </Stack>
                    <Typography variant="body1" color="inherit">2.8</Typography>
                    <Typography variant="body1" color="inherit">(120rating)</Typography>
                </div>
                <div className='flex items-center m-2 '>
                    <Typography variant="h5" color="inherit">amaguar youssef</Typography>
                    <Stack spacing={1} className='ml-3'>
                        <Rating name="size-large" defaultValue={2} size="large" />
                    </Stack>
                </div>

                <UnstyledTextareaIntroduction />
                <Button variant="contained" color="primary">
                    add comment
                </Button>
                <OtherClientRating/>
                <OtherClientRating/>
                <OtherClientRating/>
            </Container>
        </Grid>
        // </Container>
    );
}

export default ProductReting;
