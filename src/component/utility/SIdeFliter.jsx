import React from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SidBarSearchHook from "../../hook/search/sidBar-search-hook";
import { Divider, FormControl, Radio, RadioGroup } from "@mui/material";

const SIdeFliter = () => {
  const [category, brand, brandChecked, categoryChecked] = SidBarSearchHook();
  return (
    <div>
      {/* Categories */}
      <Box>
        <Divider>
          <Typography variant="body1" color="secondary">
            {/* <ChevronRightIcon /> */}
            Categories
          </Typography>
        </Divider>

        <FormControl>
          <FormGroup>
            <FormControlLabel control={<Checkbox value="0" />} label="All" />
            {category.length > 0
              ? category.map((cat, index) => (
                  <FormControlLabel
                    key={index}
                    // onChange
                    control={
                      <Checkbox onChange={categoryChecked} value={cat._id} />
                    }
                    label={cat.name}
                  />
                ))
              : null}
          </FormGroup>
        </FormControl>
      </Box>

      {/* Brands */}
      <Box>
        <Divider>
          <Typography variant="body1" color="secondary">
            {/* <ChevronRightIcon /> */}
            Brands
          </Typography>
        </Divider>
        <FormGroup>
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
      </Box>

      {/* Price */}
      <Box >
        <Divider>
          <Typography variant="body1" color="secondary">
            {/* <ChevronRightIcon /> */}
            Price
          </Typography>
        </Divider>

        <FormControl className=" w-full">
          <div className="my-2 grid grid-cols-2 gap-1">
            <TextField
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
          </div>
        </FormControl>
      </Box>

      {/* Colors */}
      <Box className=" my-2">
        <Divider>
          <Typography variant="body1" color="secondary">
            {/* <ChevronRightIcon /> */}
            Colors
          </Typography>
        </Divider>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="end"
            className="w-full"
          >
            <FormControlLabel
              value="top"
              control={<Radio />}
              label="Top"
              labelPlacement="end"
              className="w-full"
            />
            <FormControlLabel
              value="start"
              control={<Radio color="secondary" />}
              label="Start"
              labelPlacement="end"
              className="w-full"
            />
            <FormControlLabel
              value="bottom"
              control={<Radio />}
              label="Bottom"
              labelPlacement="end"
              className="w-full"
            />
            <FormControlLabel value="end" control={<Radio />} label="End" />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default SIdeFliter;
