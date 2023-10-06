import React from 'react'
import {  useMediaQuery } from '@mui/material';
import { Pagination } from '@mui/material';

function PaginatePage() {
    const isMD = useMediaQuery((theme) => theme.breakpoints.only('md'));
    const isLG = useMediaQuery((theme) => theme.breakpoints.only('lg'));
    const num = isLG || isMD ? "large" : "small";

    const handeler = (event, value) => {
        console.log(value);
    }
    return (
        <div className='flex justify-center '>
            <Pagination color="primary" count={12} onChange={handeler} size={`${num}`} />
        </div>
    )
}

export default PaginatePage