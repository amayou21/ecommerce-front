import React from 'react'

import { Container } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

import CategoryHeader from '../../component/category/CategoryHeader'
import SearchCountResult from '../../component/utility/SearchCountResult'
import SIdeFliter from '../../component/utility/SIdeFliter'
import ProductCard from '../../component/products/productCard'
import PaginatePage from '../../component/utility/PaginatePage'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ShopProductPage() {
    return (
        <Container>
            <CategoryHeader />
            <SearchCountResult title="there's 200 results" />
            <Box sx={{ flexGrow: 1 }} className='mb-8'>
                <Grid container spacing={1}>

                    <Grid xs={12} md={2} className="break-all" >
                        <Item>
                           <SIdeFliter />
                        </Item>
                    </Grid>

                    <Grid xs={12} md={10} className="break-all">
                        <Item>
                            <div className='drop-shadow-2xl grid grid-cols-1 gap-2 xl:grid-cols-3 md:grid-cols-2 place-items-center '>
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                               <ProductCard/>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
      <PaginatePage/>
        </Container>
    )
}

export default ShopProductPage