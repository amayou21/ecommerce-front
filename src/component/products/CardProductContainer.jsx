import React from 'react'
import { Container } from '@mui/material'
import Subtitle from '../utility/Subtitle'
import ProductCard from './productCard'

const CardProductContainer = ({ title, btntitle, pathText }) => {

    return (
        <Container>
            <div className='mt-6'>
                <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
                <div className='drop-shadow-2xl grid grid-cols-1 gap-2 xl:grid-cols-4 md:grid-cols-2 place-items-center '>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </Container>
    )
}
export default CardProductContainer