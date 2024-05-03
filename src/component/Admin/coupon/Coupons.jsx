import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCoupons } from "../../../Redux/actions/couponAction";
import {
  Button,
  Dialog,
  IconButton,
  Paper,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCoupon from "./AddCoupon";
import CancelIcon from "@mui/icons-material/Cancel";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTheme } from "@emotion/react";
function Coupons() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [openMadel, setOpenMadel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState();

 
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpenMadel(true);
  };

  const handleClose = () => {
    setOpenMadel(false);
  };

  const getCoupons = useSelector((state) => state.coupons.coupon);
  const coupons = getCoupons ? getCoupons.data : [];
  if (coupons) console.log(coupons.documents);
   useEffect(() => {
    const getCoupon = async () => {
      await dispatch(AllCoupons(50));
    };
    getCoupon();
  }, [openMadel])
  return (
    <>
      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={openMadel}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-20 py-5 relative">
            <AddCoupon setOpenMadel={setOpenMadel}/> 
            <div className="absolute top-0 right-0">
              <IconButton onClick={handleClose}>
                <CancelIcon color="error" />
              </IconButton>
            </div>
          </div>
        </Dialog>
      </React.Fragment>

      <React.Fragment>
        <div className="flex justify-between items-center">
          {coupons && coupons.documents && coupons.documents.length > 0 ? (
            <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
              {`You have ${coupons.documents.length} coupon`}
            </p>
          ) : null}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            add coupon
          </Button>
        </div>

        <div className="my-6 grid grid-cols-1 md:grid-cols-3">
          {coupons && coupons.documents && coupons.documents.length > 0
            ? coupons.documents.map((val, index) => {
                return (
                  <Paper
                    key={index}
                    className="flex flex-col  justify-between overflow-hidden  shadow-lg my-2 py-4 px-3 mx-4 rounded-2xl  relative"
                  >
                    <div className="mb-4 z-40">
                      <div className="flex w-full justify-between items-center">
                        <p className="mb-[2px] ">{` ${val.name}`} </p>
                        <IconButton>
                          <MoreHorizIcon color="info"/>
                        </IconButton>
                      </div>

                      <p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2 ">
                        {`${val.discount}%`}
                      </p>
                      <p className=" font-semibold mb-[2px]">{`Expire : ${val.expire}`}</p>
                    </div>
                  </Paper>
                );
              })
            : null}

          {coupons && coupons.documents && coupons.documents.length > 0 ? (
            <Paper className="flex flex-col gap-2 justify-center items-center overflow-hidden   shadow-lg my-2 mx-4 rounded-2xl  relative">
              <Button
                onClick={handleClickOpen}
                sx={{ width: "100%", height: "100%" }}
              >
                <div className="  flex justify-center items-center w-full h-[100%]">
                  <AddIcon fontSize="large" color="info" />
                </div>
              </Button>
            </Paper>
          ) : null}
        </div>
      </React.Fragment>
    </>
  );
}

export default Coupons;
