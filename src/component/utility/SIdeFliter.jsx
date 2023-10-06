import React from 'react'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
const SIdeFliter = () => {
    return (
<div className='grid grid-cols-2 gap-2 xl:grid-cols-1 md:grid-cols-3' sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'block'} }}>
  <div>
    <Typography>Category</Typography>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="All" />
      <FormControlLabel control={<Checkbox />} label="Elictronic" />
      <FormControlLabel control={<Checkbox />} label="Clothing" />
      <FormControlLabel control={<Checkbox />} label="Clothing" />
    </FormGroup>
  </div>

  <div>
    <FormGroup>
      <p>brand</p>
      <FormControlLabel control={<Checkbox />} label="All" />
      <FormControlLabel control={<Checkbox />} label="Dior" />
      <FormControlLabel control={<Checkbox />} label="adidass" />
    </FormGroup>
  </div>

  <div>
    <Typography>Brands</Typography>
  <Box
   className="lg:flex xl:flex justify-between"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
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

    )
}

export default SIdeFliter