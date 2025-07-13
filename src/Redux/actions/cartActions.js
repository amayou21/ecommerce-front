import { UseGetDataToken, UseGetDate, postData, postDataWithImage } from "../../hooks/services";
import { ADD_TO_CART, GET_ALL_CART, GET_ERROR } from "../type";

export const AllCart = (limit = 5, page = 1) =>
  async (dispatch) => {
    try {
      const data = await UseGetDataToken(
        `/api/v1/cart?limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_ALL_CART,
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

export const createCart = (formData) => async (dispatch) => {
  try {
    const data = await postData(`/api/v1/cart`, formData);
    console.log(data);
    dispatch({
      type: ADD_TO_CART,
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
