import { Box, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../images/img1.png'

const BrandCard = () => {
    return (
        <Box className='text-center '>
            <div className='flex justify-between items-center rounded-md  bg-gradient-to-r from-stone-500 to-stone-700 p-2'>
                <div className={`h-[50%] w-[50%]  rounded-md overflow-hidden mb-3`}>
                    <img
                        className="w-full"
                        src={img1}
                        alt="img1"
                    />
                </div>
                <Typography variant="p" color="inhiret">brands</Typography>
            </div>
        </Box>
    )
}

export default BrandCard