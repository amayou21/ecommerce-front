import React from "react";
import { useMediaQuery } from "@mui/material";
import { Pagination } from "@mui/material";

function PaginatePage({ pageCount = 3, getPage }) {
  const isMD = useMediaQuery((theme) => theme.breakpoints.only("md"));
  const isLG = useMediaQuery((theme) => theme.breakpoints.only("lg"));
  const num = isLG || isMD ? "large" : "small";

  const handeler = (event, value) => {
    getPage ? getPage(value) : console.log(value);
  };
  return (
    <div className="flex justify-center mt-5">
      <Pagination
        color="primary"
        count={pageCount}
        onChange={handeler}
        size={`${num}`}
      />
    </div>
  );
}

export default PaginatePage;
