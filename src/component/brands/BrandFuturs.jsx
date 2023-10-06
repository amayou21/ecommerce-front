import React from 'react'
import BrandCard from './BrandCard'
import { Container } from '@mui/material'
import Subtitle from '../utility/Subtitle'

const BrandFuturs = ({ title, btntitle,pathText }) => {

    return (
        <Container className='mt-2'>

<Subtitle title={title} btntitle={btntitle} pathText={pathText} />
            <div className='drop-shadow-2xl grid grid-cols-2 gap-4 xl:grid-cols-6 md:grid-cols-3 place-items-center p-2'>
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

export default BrandFuturs