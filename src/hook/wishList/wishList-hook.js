import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetWishlistProd } from '../../Redux/actions/wishListAction';

function WishListHook() {
  const dispatch = useDispatch();
  const [isFavorit, setisFavorit] = useState([]);

  const wshList = useSelector((val) => val.wishList.wishListprod);

  const prods = wshList ? wshList.data : [];
  if (prods) console.log(prods.data);

  const getWishListProd = async () => {
    await dispatch(GetWishlistProd());
  };

  useEffect(() => {
    getWishListProd();

    if (prods && prods.data) {
      setisFavorit(prods.data.map((val) => val._id));
    }
  }, [wshList || isFavorit]);
  return [prods, isFavorit]
}

export default WishListHook
