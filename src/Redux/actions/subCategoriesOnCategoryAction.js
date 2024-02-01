import { UseGetDate } from '../../hooks/useGetDate';
import { GET_ALL_SUBCATEGORIES_ON_CTEGORY, GET_ERROR } from '../type';

//  get all sub categories on spesific category
export const subCategoryOnCategory = (id) => async (dispatch) => {
    try {
        const subCategory = await UseGetDate(`/api/v1/categories/${id}/subcategories`)
        dispatch({
            type: GET_ALL_SUBCATEGORIES_ON_CTEGORY,
            payload: subCategory
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: `Error : ${error}`
        })
    }
}
