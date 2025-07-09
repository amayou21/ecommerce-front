// import React from "react";
// import img1 from "../../images/img1.png";
// import img2 from "../../images/img2.png";
// import img3 from "../../images/img3.png";
// import Box from "@mui/material/Box";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import { useTheme } from "@emotion/react";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// // const images = [
// //     {
// //         label: 'img1',
// //         imgPath: img1,
// //         description: "description 1",
// //     },
// //     {
// //         label: 'img2',
// //         imgPath: img2,
// //         description: "description 2",
// //     },
// //     {
// //         label: 'img3',
// //         imgPath: img3,
// //         description: "description 3",
// //     },
// // ];

// const HSlide = () => {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const theme = useTheme();

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <></>
//     // <Box sx={{ width: "100%" }}>
//     //     <div style={{ width: '100%' }} className={`${theme.palette.slidBackgroundColor}`}>
//     //         <AutoPlaySwipeableViews
//     //             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//     //             index={activeStep}
//     //             onChangeIndex={handleStepChange}
//     //             enableMouseEvents
//     //             style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
//     //         >
//     //             {images.map((step, index) => (
//     //                 <div key={step.label} className='mt-2 text-center flex items-center justify-around'>
//     //                     {Math.abs(activeStep - index) <= 2 ? (
//     //                         <Box
//     //                             component="img"
//     //                             sx={{
//     //                                 height: 255,
//     //                                 maxWidth: 400,
//     //                                 overflow: 'hidden',
//     //                                 width: '100%',
//     //                             }}
//     //                             src={step.imgPath}
//     //                             alt={step.label}
//     //                             className='h-255 max-w-400 overflow-hidden w-full'
//     //                             color='inherit'
//     //                         />
//     //                     ) : null}
//     //                     <div className='m-3 via-purple-500 to-pink-500'>{step.description}</div> {/* Add the description */}
//     //                 </div>
//     //             ))}
//     //         </AutoPlaySwipeableViews>
//     //     </div>
//     // </Box>
//   );
// };

// export default HSlide;
