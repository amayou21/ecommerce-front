
import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
// import img1 from '../../images/img1.png'
import { useTheme } from "@emotion/react";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const theme = useTheme()
    return (
        <Grid container className="flex justify-center items-center" sx={{ height: "670px" }}>

            <Paper elevation={10} className=" w-80 mx-auto mt-20 bg-white rounded-md shadow">
                <Grid className="p-6 space-y-5">
                    <Grid align="center" className="animate-bounce">

                        <AccountCircle color={theme.palette.mode === 'dark' ? 'warning' : "primary"}
                            sx={{ fontSize: 80, marginTop: -10 }} />
                    </Grid>
                    <Grid align="center">
                        <h2 className="text-2xl font-bold">Sign In</h2>
                    </Grid>
                    <form action="" method="post">


                        <TextField
                            label="Email"
                            // placeholder="Enter Email"
                            type="email"
                            fullWidth
                            required
                        />

                        <TextField
                            label="Password"
                            // placeholder="Enter password"
                            type="password"
                            fullWidth
                            required
                        />

                        <div className="mb-4">
                            <Checkbox name="checkedB" id='checkedB' color="primary" />
                            <label htmlFor="checkedB" className="ml-2 ">
                                Remember me
                            </label>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            className="mb-4 bg-crimson text-white border-crimson border-2 rounded-full py-2 px-4"
                            fullWidth
                        >
                            Sign in
                        </Button>
                    </form>

                </Grid>


                <Grid className="flex justify-between w-full p-2">
                    <Typography>
                        <Link to="#">Forgot password?</Link>
                    </Typography>
                    <Link to='/register'>
                        <Button
                            className={`${theme.palette.btnBgColor}`}
                            variant="contained"
                            color={theme.palette.mode === 'dark' ? 'warning' : "primary"}
                            endIcon={<ArrowForwardOutlinedIcon className={theme.palette.mode === 'dark' ? 'text-red-300' : "text-white"} />}>
                            sign up
                        </Button>
                    </Link>

                </Grid>
            </Paper>

        </Grid>
    );
};

export default LoginPage;
