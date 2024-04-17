import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetWishlistProd } from "../../Redux/actions/wishListAction";

function ProductContainerHook() {
    const dispatch = useDispatch();
    const [isFavorit, setisFavorit] = useState([]);
  
    const wshList = useSelector((val) => val.wishList.wishListprod);
  
    const prods = wshList ? wshList.data : [];
    // if (prods) console.log(prods.data);
  
    const getWishListProd = async () => {
      await dispatch(GetWishlistProd());
    };
  
    useEffect(() => {
      if (prods && prods.data) {
        setisFavorit(prods.data.map((val) => val._id));
      }
      getWishListProd();
    }, [wshList]);

    return [isFavorit]
}

export default ProductContainerHook