
import React from 'react'
import CategoryContainerPage from '../../component/category/CategoryContainerPage';
import { Container } from '@mui/material';
import PaginatePage from '../../component/utility/PaginatePage';

function AllCategoryPage() {
    return (
        <Container >
                <CategoryContainerPage />
                <PaginatePage/>
        </Container>
    )
}

export default AllCategoryPage