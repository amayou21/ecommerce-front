import React from "react";
import Typography from "@mui/material/Typography";
import Address from "../../component/user/Address";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const AllUserAddressPage = () => {
  const theme = useTheme();
  return (
    <div>
      <Typography variant="h5" color="inherit">
        Address
      </Typography>
      <Address />
      <Address />
      <Address />
      <Link to="/user/add-address">
        <Button
          className={`${theme.palette.btnBgColor}`}
          variant={`${theme.palette.btnVariant}`}
          color={theme.palette.mode === "dark" ? "secondary" : "primary"}
        >
          add other address
        </Button>
      </Link>
    </div>
  );
};

export default AllUserAddressPage;
