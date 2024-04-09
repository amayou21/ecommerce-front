import React from "react";

import { FormControl, InputLabel, Select } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
const SearchCountResult = ({ title, onFilterClick }) => {
  const clickMe = async (key) => {
    await localStorage.setItem("orderType", key);
    await onFilterClick();
  };
  let val = "without-sorting";
  if (localStorage.getItem("orderType")) {
    val = localStorage.getItem("orderType");
  }
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-label"> Order By</InputLabel>
      <Select
        value={val}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue="without-sorting"
        label="Order By"
        onChange={(e) => clickMe(e.target.value)}
      >
        <MenuItem value="without-sorting"> Without Sorting</MenuItem>
        <MenuItem value="best-sellers" onClick={(e) => clickMe(e.target.value)}>
          Best Sellers
        </MenuItem>
        <MenuItem onClick={(e) => clickMe(e.target.value)} value="top-rated">
          Top Rated
        </MenuItem>
        <MenuItem onClick={(e) => clickMe(e.target.value)} value="low-to-high">
          Price: Low to High
        </MenuItem>
        <MenuItem onClick={(e) => clickMe(e.target.value)} value="high-to-low">
          Price: High to Low
        </MenuItem>
      </Select>
    </FormControl>
  );
};
export default SearchCountResult;
