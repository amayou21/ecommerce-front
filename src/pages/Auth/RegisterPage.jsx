import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useTheme } from "@emotion/react";
import { HowToReg } from "@mui/icons-material";
const Register = () => {
    const theme = useTheme()
    return (
        <Grid  className="flex justify-center items-center " sx={{ height: "880px" }}>

            <Paper elevation={10} className=" w-80 mx-aut mt-20 bg-white rounded-md shadow">
                <Grid className="p-6 space-y-5">
                    <Grid align="center" className="animate-bounce">

                        <HowToReg color={theme.palette.mode === 'dark' ? 'warning' : "primary"}
                            sx={{ fontSize: 80, marginTop: -10 }} />
                    </Grid>

                    <Grid align="center">
                        <h2 className="text-2xl font-bold">Register</h2>
                    </Grid>

                    <TextField
                        label="First Name"
                        // placeholder="Enter First Name"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Last Name"
                        // placeholder="Enter Last Name"
                        fullWidth
                        required
                    />

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
                        Sign up
                    </Button>
                </Grid>


                <Grid className="flex justify-between items-center w-full p-2">
                    <Typography variant="p" color="inhiret">
                        Do you have an account ?
                    </Typography>
                    <Link to="/login" className="text-crimson">

                        <Button
                            className={`${theme.palette.btnBgColor}`}
                            variant="contained"
                            color={theme.palette.mode === 'dark' ? 'warning' : "primary"}
                            endIcon={<ArrowForwardOutlinedIcon className={theme.palette.mode === 'dark' ? 'text-red-300' : "text-white"} />}>
                            login
                        </Button>
                    </Link>

                </Grid>
            </Paper>

        </Grid>
    )
}

export default Register;