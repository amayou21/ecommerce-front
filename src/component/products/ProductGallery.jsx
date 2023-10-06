import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import Grid from '@mui/material/Unstable_Grid2';

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import { Typography } from '@mui/material';

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

const ProductGallery = () => {


  return (
    <div className='mt-5'>
      <Grid container >

        <Grid sm={12} xs={12} lg={3} md={3}>
          <div className='b rounded-md mr-2 shadow-lg'>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              showThumbnails={false}

            />
          </div>

        </Grid>

        <Grid sm={12} xs={12} lg={9} md={9} className=' rounded-md shadow-lg '>
          <div className='p-2'>
            description
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum tempore repudiandae eligendi excepturi voluptas nemo doloremque, expedita nesciunt. Praesentium sequi autem maxime delectus expedita officiis in molestias earum non.

            </p>
            <span className='text-yellow-500 my-2'>5.3</span>
            <p>brand : samsung</p>
            <div className='flex justify-around w-[10%]'>
              <div class="rounded-full bg-gradient-to-r from-red-500 to-orange-500 w-[30px] h-[30px" />
              <div class="rounded-full bg-gradient-to-r from-lime-400 to-lime-500 w-[30px] h-[30px]" />
              <div class="rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 w-[30px] h-[30px]" />
            </div>
          </div>


        </Grid>
      </Grid>
    </div>
  )
}
export default ProductGallery