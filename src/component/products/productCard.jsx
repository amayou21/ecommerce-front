import React, { useState } from 'react';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Rating, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {Link} from 'react-router-dom'
import img3 from '../../images/img3.png'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const getLabelText = (value) => {
    return labels[value];
};

const ProductCard = () => {

    const theme = useTheme();
    const [value, setValue] = useState(2.5);
    const [hover, setHover] = useState(-1);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    };

    return (
      
        <Box className={`${theme.palette.prodyctCardbg}  rounded-md `}>

            {/*  */}
            <div>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color='error'/>} />
                  <Link to='/product-details'>
                    <img
                    className="w-full" // p-2
                    src={img3}
                    alt="desc"
                    />
                   </Link>
            </div>

            <Typography variant="body2" color="text.secondary" className='p-2'>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>

            <CardContent className='flex justify-around'>
                <div >
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
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="text-slate-700" />}
                    />

                    {value !== null && (
                        <Box className='text-lime-500' sx={{ ml: 1 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}

                </div>
                <Typography variant="h6" color="initial">250 $</Typography>
            </CardContent>
        </Box>

    );
}
export default ProductCard