import React from 'react'
import { Container } from '@mui/material';
import BrandCard from './BrandCard'
function BrandContainer() {
    return (
        <Container className='mt-2'>
            <div className="drop-shadow-2xl grid grid-cols-2 gap-4 xl:grid-cols-6 md:grid-cols-3 place-items-center p-4">
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
                <BrandCard />
            </div>
        </Container>
    )
}

export default BrandContainer