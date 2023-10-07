import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import Grid from '@mui/material/Unstable_Grid2';

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import { Button, Stack, Typography } from '@mui/material';

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
    <div className='mt-5 shadow-lg rounded-md items-center'>
      <Grid container >

        <Grid sm={12} xs={12} lg={3} md={3} className="flex justify-center items-center ">
          <div className='mr-2 p-5 '>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              showThumbnails={false}
            />
          </div>

        </Grid>

        <Grid sm={12} xs={12} lg={9} md={9}>
          <div className='p-4'>
            description
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum tempore repudiandae eligendi excepturi voluptas nemo doloremque, expedita nesciunt. Praesentium sequi autem maxime delectus expedita officiis in molestias earum non.

            </p>
            <span className='text-yellow-500 my-2'>5.3</span>
            <p>brand : samsung</p>
            <div className='flex w-[20%]'>
              <div
                className="mr-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 w-[20px] h-[20px]" />
              <div
                className="mr-2 rounded-full bg-gradient-to-r from-lime-400 to-lime-500 w-[20px] h-[20px]" />
              <div
                className="mr-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 w-[20px] h-[20px]" />
            </div>
            <div className='my-5'>
              <h3>descriptions</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea facere, magnam eos dolorem voluptates autem, maxime exercitationem molestiae ratione debitis? Nulla perspiciatis perferendis atque fuga obcaecati minus doloribus blanditiis!
                Dicta nam praesentium quia. Vitae architecto qui excepturi id quos, dolor iste, nam voluptates ad odio explicabo, amet placeat sapiente. Molestiae placeat repudiandae adipisci incidunt laudantium optio modi amet veniam.
                Sequi sed perferendis, tempore excepturi ea unde. Doloribus necessitatibus iste harum voluptatum esse repellendus perferendis tenetur eligendi nam! Sit fugiat mollitia accusantium modi voluptatum labore fuga aspernatur dolores debitis illum.
                Sequi sed perferendis, tempore excepturi ea unde. Doloribus necessitatibus iste harum voluptatum esse repellendus perferendis tenetur eligendi nam! Sit fugiat mollitia accusantium modi voluptatum labore fuga aspernatur dolores debitis illum.
              </p>
              <Stack direction="row" spacing={2} className='my-3'>
                <Button sx={{bgcolor:"#ff3d00"}}>200$</Button>
                <Button variant="contained" color="success">
                  add to cart
                </Button>
              </Stack>
            </div>

          </div>


        </Grid>
      </Grid>
    </div>
  )
}
export default ProductGallery