import React, { useEffect } from "react";
import CategoryContainerPage from "../../component/category/CategoryContainerPage";
import { Container } from "@mui/material";
import PaginatePage from "../../component/utility/PaginatePage";
import axios from "axios";
import { baserUrl } from "../../Api/baseUrl";
// import { baserUrl } from "../../Api/baseUrl";

function AllCategoryPage() {
  const getData = async () => {
    const res = await baserUrl.get("/api/v1/categories?limit=20");
    console.log(res.data.documents);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <CategoryContainerPage />
      <PaginatePage />
    </Container>
  );
}

export default AllCategoryPage;
