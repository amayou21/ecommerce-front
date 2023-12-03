import { UseGetDate, postDataWithImage } from "../../hooks/useGetDate";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR } from "../type";

// @desc    get data
// @route   Get /api/v1/categories
// @access  Public
export const AllCategory =
  (limit = 5, page) =>
  async (dispatch) => {
    try {
      const data = await UseGetDate(
        `/api/v1/categories?limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_ALL_CATEGORY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ERROR,
        payload: `error : ${error}`,
      });
    }
  };

// @desc  Post Data with files
// @route  Post /api/v1/categories
// @access Private
export const createCategory = (formData) => async (dispatch) => {
  try {
    const data = await postDataWithImage(`/api/v1/categories`, formData);
    dispatch({
      type: CREATE_CATEGORY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: `error : ${error}`,
    });
  }
};
