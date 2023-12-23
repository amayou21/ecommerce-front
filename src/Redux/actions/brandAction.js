import { UseGetDate, postDataWithImage } from "../../hooks/useGetDate";
import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR } from "../type";

export const AllBrand =
  (limit = 5, page=1) =>
  async (dispatch) => {
    try {
      const data = await UseGetDate(
        `/api/v1/brands?limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_ALL_BRAND,
        payload: data,
        // loading: true,
      });
    } catch (error) {
      dispatch({
        type: GET_ERROR,
        payload: `error :${error}`,
      });
    }
  };

export const createBrand = (formData) => async (dispatch) => {
  try {
    const data = await postDataWithImage(`/api/v1/brands`, formData);
    dispatch({
      type: CREATE_BRAND,
      payload: data,
      // loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: `error :${error}`,
    });
  }
};
