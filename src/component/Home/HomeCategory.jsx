import React from 'react'
import Subtitle from '../utility/Subtitle';
import { Container } from '@mui/material';
import CategoryCard from '../category/CategoryCard';

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'

const HomeCategory = ({ title, btntitle, pathText }) => {

    return (
        <Container>
            <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
            <div className="drop-shadow-2xl grid grid-cols-2 gap-4 xl:grid-cols-6 md:grid-cols-3 place-items-center p-2">
                <CategoryCard desc="developement" image={img1} background='bg-gradient-to-r from-blue-200 to-cyan-200' />
                <CategoryCard desc="resaux" image={img2} background='bg-gradient-to-r from-lime-400 to-lime-500' />
                <CategoryCard desc="comptability" image={img3} background='bg-gradient-to-r from-fuchsia-500 to-pink-500' />
                <CategoryCard desc="economy" image={img1} background='bg-gradient-to-r from-stone-500 to-stone-700' />
                <CategoryCard desc="gestion d'entreprise" image={img2} background='bg-gradient-to-r from-slate-900 to-slate-700' />
                <CategoryCard desc="sience pc" image={img3} background='bg-gradient-to-r from-emerald-500 to-emerald-900' />
            </div>
        </Container>
    )

}
export default HomeCategory