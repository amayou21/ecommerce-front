import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Grid from "@mui/material/Unstable_Grid2";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import { Button, IconButton, Stack } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ProductDetailsHook from "../../hook/product/product-details-hook";

const ProductGallery = (onClick, onDisable) => {
  
  const [product, images] = ProductDetailsHook();

  const customPrevButton = (onClick, onDisable) => (
    <div className="absolute h-[100%] z-10 left-1 flex items-center">
      <IconButton onClick={onClick} onDisable={onDisable}>
        <SkipPreviousOutlinedIcon sx={{ fontSize: 40, color: "#ff3d00" }} />
      </IconButton>
    </div>
  );

  const customNextButton = (onClick, onDisable) => (
    <div className="absolute h-[100%] z-10 right-1 flex items-center">
      <IconButton onClick={onClick} onDisable={onDisable}>
        <SkipNextOutlinedIcon sx={{ fontSize: 40, color: "#ff3d00" }} />
      </IconButton>
    </div>
  );

  return (
    <div className="mt-5 rounded-md items-center">
      <Grid container>
        <Grid
          sm={12}
          xs={12}
          lg={4}
          md={4}
          className="flex justify-center items-center relative"
        >
          <div>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              isRTL={true}
              showPlayButton={false}
              showThumbnails={false}
              renderRightNav={customNextButton}
              renderLeftNav={customPrevButton}
            />
          </div>
        </Grid>

        <Grid sm={12} xs={12} lg={8} md={8}>
          <div className="p-4">
            <p>{product ? product.category.name : null} </p>
            <p className="break-all">{product ? product.description : null}</p>
            <span className="text-yellow-500 my-2">
              {product ? product.ratingQuantity : null}
            </span>
            {product ?product.brand? <p>{` brand : ${product.brand.name}`}</p> : null:null}

            <div className="flex w-[20%]">
              {product
                ? product.colors.map((c, index) => {
                    return (
                      <IconButton key={index}>
                        <CircleIcon key={index} sx={{ color: c }} />
                      </IconButton>
                    );
                  })
                : null}
            </div>
            <div className="my-5">
              <Stack direction="row" spacing={2} className="my-3">
                {product ? (
                  product.price ? (
                    <Button sx={{ bgcolor: "#ff3d00" }}>
                      {`${product.price}$`}
                    </Button>
                  ) : null
                ) : null}

                <Button variant="contained" color="success">
                  add to cart
                </Button>
              </Stack>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProductGallery;
