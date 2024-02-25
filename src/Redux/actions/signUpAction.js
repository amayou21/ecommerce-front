import { postData } from "../../hooks/services"
import { SIGNUP } from "../type"

export const signUpAction = (data) => async (dispatch) => {
    try {
        const user = await postData("/api/v1/auth/signup", data)
        dispatch({
            type: SIGNUP,
            payload: user
        })

    } catch (e) {
        dispatch({
            type: SIGNUP,
            payload: e.user
        })
    }
}