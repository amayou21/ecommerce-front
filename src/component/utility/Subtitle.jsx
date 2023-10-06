import React from 'react'
import ReadMoreSharpIcon from '@mui/icons-material/ReadMoreSharp';
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link } from "react-router-dom";

const Subtitle = ({ title, btntitle, pathText}) => {

    const theme = useTheme()
    
    return (
        <div>
            {btntitle ? (
                <div className='flex flex-row flex justify-between  p-5'>
                    <div >{title}</div>
                    <Link to={`${pathText}`}>
                    <Button
                    // href=
                        className={`${theme.palette.btnBgColor}`}
                        variant={`${theme.palette.btnVariant}`}
                        color={theme.palette.mode === 'dark' ? 'secondary' :"primary"}
                        endIcon={<ReadMoreSharpIcon className={theme.palette.mode === 'dark' ? 'text-red-300' :"text-white"} />}>
                        {btntitle}
                    </Button>
                    </Link>
                </div>
            ) : (null)}
        </div>
    )
}
export default Subtitle