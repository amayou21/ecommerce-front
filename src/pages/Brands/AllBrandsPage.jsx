import React from 'react'
import { Container } from '@mui/material';
import BrandContainer from '../../component/brands/BrandContainer';
import PaginatePage from '../../component/utility/PaginatePage';

function AllBrandsPage() {
  return (
    <Container>

      <BrandContainer />
      <PaginatePage />
    </Container>
  )
}

export default AllBrandsPage