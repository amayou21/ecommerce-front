import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const CategoryCard = ({ image, background, desc }) => {

    return (
        <Box className='text-center '>
            <div className='flex justify-center'>
                <div className={`h-[50%] w-[50%]  rounded-full overflow-hidden ${background}  mb-3`}>
                    <img
                        className="w-full"
                        src={image}
                        alt={desc}
                    />
                </div>
            </div>
            <Typography variant="p">{desc}</Typography>
        </Box>
    )
}
export default CategoryCard