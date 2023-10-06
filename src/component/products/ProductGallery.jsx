import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import Grid from '@mui/material/Unstable_Grid2';

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'


const images = [
   {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },]

const ProductGallery=()=>{
	return(

		<Grid container spacing={1}>

                    <Grid sm={12} xs={12} lg={4} md={4} >
                        <ImageGallery items={images} />
                    </Grid>

                    <Grid sm={12} xs={12} lg={8} md={8}>
                        
		
                    </Grid>
    </Grid>
		)
}
export default ProductGallery