import React from "react";
import PaginatePage from "../../component/utility/PaginatePage";
import Favorits from "../../component/user/Favorits";
import Typography from "@mui/material/Typography";

const AllUserFavoritsPage = () => {
  return (
    <div>
      <Typography variant="h5" color="inherit" className="p-2">
        Favorits
      </Typography>
      <Favorits />
      <PaginatePage />
    </div>
  );
};

export default AllUserFavoritsPage;
