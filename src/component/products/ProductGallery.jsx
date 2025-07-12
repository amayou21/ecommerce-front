import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import { Button, IconButton, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ProductDetailsHook from "../../hook/product/product-details-hook";
import AddToCartHook from "../../hook/cart/add-cart-hook";
import { useParams } from "react-router-dom";

const ProductGallery = (onClick, onDisable) => {
  const { id } = useParams();
  const [product, images] = ProductDetailsHook();

  const [color, colorIndex, colorClick] = AddToCartHook(id);

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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-1">
      <div className="md:p-8">
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          isRTL={true}
          showPlayButton={false}
          showThumbnails={true}
          renderRightNav={customNextButton}
          renderLeftNav={customPrevButton}
        />
      </div>

      <div className="py-4">
        <Typography color="secondary" variant="h3" component="h3">
          {product && product.title ? product.title : null}
        </Typography>

        <Typography
          className="break-all py-3 font-mono"
          variant="body1"
          component="p"
          color="inherit"
        >
          {product && product.description ? product.description : null}
        </Typography>

        <div className="md:flex justify-around my-2">
          {product && product.ratingQuantity ? (
            <Typography
              className="font-bold"
              variant="p"
              component="p"
              color="inherit"
            >
              {` Rting Quantity : ${product.ratingQuantity}`}
            </Typography>
          ) : null}

          <Typography
            className="font-bold"
            variant="p"
            component="p"
            color="inherit"
          >
            {`Brand : ${
              product && product.brand ? product.brand.name : "brand"
            }`}

            {/* {` brand : ${}`} */}
          </Typography>

          {product && product.category ? (
            <Typography
              className="font-bold"
              variant="p"
              component="p"
              color="inherit"
            >
              {`Category : ${product.category.name}`}
            </Typography>
          ) : null}

          {
            <Typography variant="p" color="inherit">
              <span className="font-bold">Quantity:</span>
              <span className="font-bold">10</span>
            </Typography>
          }
        </div>

        <div className="flex w-[100%] items-center font-bold py-auto">
          <Typography variant="p" color="inherit">
            Colors :
          </Typography>
          {product && product.colors ? (
            product.colors.map((c, index) => {
              return (
                <div
                  key={index}
                  onClick={() => colorClick(index, c)}
                  className="rounded-full p-2 mx-1 cursor-pointer"
                  style={{
                    backgroundColor: c,
                    border:
                      colorIndex === index
                        ? "2px solid orange"
                        : "2px solid transparent",
                  }}
                ></div>
              );
            })
          ) : (
            <p>No colors for this product</p>
          )}
        </div>

        <div className="my-5 flex justify-between ">
          {/* <Stack direction="row" spacing={2} className="my-3"> */}
          {product ? (
            product.price ? (
              <Typography variant="h6" color="inherit">
                <span className="text-3xl font-bold">
                  {`${product.price}$`}
                </span>
              </Typography>
            ) : null
          ) : null}
          <Button variant="contained" color="secondary">
            add to cart
          </Button>
          {/* </Stack> */}
        </div>
      </div>
    </div>
  );
};
export default ProductGallery;
