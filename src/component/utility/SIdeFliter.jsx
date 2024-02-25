import React from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SidBarSearchHook from "../../hook/search/sidBar-search-hook";
const SIdeFliter = () => {
  const [category, brand, brandChecked, categoryChecked] = SidBarSearchHook();
  return (
    <div
      // className="grid grid-cols-3 gap-2 xl:grid-cols-1 lg:grid-cols-1  md:grid-cols-3  max-sm:grid-cols-1  "
      sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "block" } }}
    >
      <div>
        <Typography>Category</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox value="0" />} label="All" />
          {category.length > 0
            ? category.map((cat, index) => (
                <FormControlLabel
                  // onChange
                  control={
                    <Checkbox onChange={categoryChecked} value={cat._id} />
                  }
                  label={cat.name}
                />
              ))
            : null}
        </FormGroup>
      </div>

      <div>
        <FormGroup>
          <p>brand</p>
          <FormControlLabel control={<Checkbox value="0" />} label="All" />{" "}
          {brand.length > 0
            ? brand.map((bra, index) => (
                <FormControlLabel
                  // onChange
                  control={<Checkbox onChange={brandChecked} value={bra._id} />}
                  label={bra.name}
                />
              ))
            : null}
        </FormGroup>
      </div>

      <div>
        <Typography>Brands</Typography>
        <Box
          className="lg:block xl:block justify-between"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 0.2, width: "7ch" },
          }}
          autoComplete="off"
        >
          <TextField
            // sx={{ width: '100px' }}
            id="min-number"
            label="Min"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            // sx={{ width: '100px' }}
            id="max-number"
            label="Max"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default SIdeFliter;
