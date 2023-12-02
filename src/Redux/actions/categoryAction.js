import { baserUrl } from "../../Api/baseUrl";
import { GET_ALL_CATEGORY, GET_ERROR } from "../type";
const AllCategory = (limit=5,page) => async (dispatch) => {
  
  try {
    const res = await baserUrl.get(`/api/v1/categories?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "error :" + error,
    });
  }
};

export default AllCategory;
