import { UseGetDataToken, postData } from "../../hooks/services"
import { SIGNUP, LOGIN, GET_ERROR, GET_LOGGED_USER } from "../type"

export const signUp = (data) => async (dispatch) => {
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


export const login = (data) => async (dispatch) => {
    try {
        const user = await postData("/api/v1/auth/login", data)
        dispatch({
            type: LOGIN,
            payload: user
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: `error ${e}`
        })
    }
}



export const loggedUser = () => async (dispatch) => {
    try {
        const loggingUser = await UseGetDataToken("/api/v1/users/getMe")
        dispatch({
            type: GET_LOGGED_USER,
            payload: loggingUser
        })
    } catch (error) {
        dispatch({
            type: GET_LOGGED_USER,
            payload: `Error :${error}`
        })
    }
}