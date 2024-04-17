// import React, { useEffect, useState } from "react";

// // import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { useTheme, IconButton, Paper, Rating } from "@mui/material";
// import { Link } from "react-router-dom";
// // import img3 from "../../../images/img3.png";
// import DeleteIcon from "@mui/icons-material/Delete";
// // import EditNoteIcon from "@mui/icons-material/EditNote";
// // import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// // import Favorite from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import { useDispatch, useSelector } from "react-redux";
// import { deleterodFromWishList } from "../../../Redux/actions/wishListAction";

// const FavoriteCard = ({ prod }) => {
//   // const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [check, setCheck] = useState();

//   const deleteProd = useSelector((val) => val.wishList.addprodToWish);
//   if (deleteProd) console.log(deleteProd);

//   // const deleteProd=useSelector(state=)
//   const dispatch = useDispatch();
//   const deleteProdFromWishList = async (prodID) => {
//     setLoading(true);
//     await dispatch(deleterodFromWishList(prodID));
//     setLoading(false);
//     setCheck(true)
//   };

//   useEffect(() => {
//     if (!loading) {
//       setOpen(false);
//       if (deleteProd) {
//         if (deleteProd && check) {
           
//           if (deleteProd.data) {
//             if (deleteProd.data.status === "success") {
//               console.log(deleteProd.data);
//               setLoading(false)
//             } else {
//               setLoading(false);
//               //   UseNotification(deleteProd.data.errors[0].msg, "error");
//             }
//           }
//         }
//       }
//     } else {
//       setOpen(true);
//     }
//     setCheck(false);
//   }, [loading]);

//   //   const theme = useTheme();

//   //   const [isFavorite, setIsFavorite] = useState(false);

//   //   const toggleFavorite = () => {
//   //     setIsFavorite((prevIsFavorite) => !prevIsFavorite);
//   //   };
//   //   const label = { inputProps: { "aria-label": "Checkbox demo" } };

//   return (
//     // <Paper className="rounded-md shadow-2xl">

//     <Paper className=" shadow-lg rounded-full max-w-sm">
//       <Link to={`/product/${prod._id}`} data-aos="zom-in">
//         <img src={prod.imageCover} />
//       </Link>

//       <div className="px-5 py-2">
//         <Typography
//           variant="body2"
//           component="p"
//           color="text.secondary"
//           className="px-2  max-h-10 break-all overflow-hidden whitespace-wrap overflow-ellipsis"
//         >
//           {prod.description}...
//         </Typography>
//       </div>

//       <div className="px-5 pb-5">
//         <div className="flex justify-between px-2 py-2">
//           <Rating name="hover-feedback" value={2} readOnly />
//         </div>

//         <div className={`flex justify-between items-center `}>
//           <IconButton
//             // aria-label=""
//             onClick={() => {
//               deleteProdFromWishList(prod._id);
//             }}
//           >
//             <DeleteIcon color="error" />
//           </IconButton>

//           <IconButton>
//             <ShareIcon />
//           </IconButton>

//           <Typography variant="h6" color="inherit" className="p-2">
//             <span className="text-3xl font-bold">{`${prod.price}$`}</span>
//           </Typography>
//         </div>
//       </div>
//     </Paper>
//   );
// };

// export default FavoriteCard;
