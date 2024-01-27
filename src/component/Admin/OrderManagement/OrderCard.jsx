import React from "react";

import {
  Box,
  IconButton,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import img1 from "../../../images/img1.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <Paper className="shadow-md relative Item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 justify-items-center justify-content-center mb-2">
      <div className="flex items-center ">
        <img width="3000px" src={img1} />
      </div>

      <div className="grid lg:col-span-4 md:col-span-1 p-2 ">
        <p className="my-2">eclectronice</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          autem harum expedita, quidem ad ea ut qui. Molestiae et cupiditate
          expedita neque. Soluta iusto modi voluptatibus, magnam fugit libero
          omnis.
        </p>
        <p>brand: Dior</p>
        <div className="flex items-center my-2">
          <Typography variant="div" color="inherit ">
            colors :{" "}
          </Typography>
          <div className="mr-2 ml-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 w-[20px] h-[20px]" />
          <div className="mr-2 rounded-full bg-gradient-to-r from-lime-400 to-lime-500 w-[20px] h-[20px]" />
          <div className="mr-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 w-[20px] h-[20px]" />
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-number"
            label="Quantity"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Link to="/admin/order-detaills/2513" className="ml-2 my-2">
          <Button variant="contained" color="primary">
            order detaills
          </Button>
        </Link>
      </div>
      <div className="absolute right-3 top-2">
        <IconButton aria-label="delete">
          <DeleteIcon color="error" />
        </IconButton>
      </div>
      <Typography
        className="grid absolute bottom-2 right-3 "
        variant="p"
        color="inherit"
      >
        250$
      </Typography>
    </Paper>
  );
};
export default OrderCard;
