import React from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import Typography from "@mui/material/Typography";

const SearchCountResult = ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-between mt-2">
      <div>
        <Typography variant="h6" color="inhiret">
          {title}{" "}
        </Typography>
      </div>
      <Button
        endIcon={<TuneSharpIcon />}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        order by
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Bestselling</MenuItem>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        <MenuItem onClick={handleClose}>Price from Lowest to Highest</MenuItem>
        <MenuItem onClick={handleClose}>Price from Highest to Lowest</MenuItem>
      </Menu>
    </div>
  );
};
export default SearchCountResult;
