import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import { IconButton, Paper, Rating, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import img3 from "../../images/img3.png";

import ShareIcon from "@mui/icons-material/Share";

import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const getLabelText = (value) => {
  return labels[value];
};

const ProductCard = ({ prod }) => {
  const theme = useTheme();
  const [value, setValue] = useState(2.5);
  const [hover, setHover] = useState(-1);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <Paper className="rounded-md flex flex-col">
      <div className="flex-grow">
        <Link to={`/product/${prod._id}`}>
          <img
            className="p-1 object-cover" // Adjust the height as needed
            src={prod.imageCover}
            alt="desc"
          />
        </Link>
        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          className="px-2 max-h-10 break-all overflow-hidden whitespace-wrap overflow-ellipsis"
        >
          {prod.description}...
        </Typography>
      </div>

      <div className="flex justify-between px-2">
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={
            <StarIcon style={{ opacity: 0.55 }} fontSize="text-slate-700" />
          }
        />

        {value !== null && (
          <Typography
            className={`${
              theme.palette.mode === "dark" ? "text-red-300" : "text-sky-500"
            } pr-1`}
            sx={{ ml: 1 }}
          >
            {labels[hover !== -1 ? hover : value]}
          </Typography>
        )}
      </div>

      <div className={`flex justify-between items-center `}>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite color="error" />}
        />
        <IconButton>
          <ShareIcon />
        </IconButton>

        <Typography variant="h6" color="inherit" className="p-2">
          250 $
        </Typography>
      </div>
    </Paper>
  );
};
export default ProductCard;
