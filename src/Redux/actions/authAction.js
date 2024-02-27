import { UseGetDataToken, postData, updateData } from "../../hooks/services"
import { SIGNUP, LOGIN, GET_ERROR, GET_LOGGED_USER, FORGOT_PASSWORD, RESET_PASSWORD, VERIFY_RESET_CODE } from "../type"

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


export const forgetPassword = (data) => async (dispatch) => {
    try {
        const res = await postData("/api/v1/auth/forgotPassword", data)
        dispatch({
            type: FORGOT_PASSWORD,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD,
            payload: `Error :${error}`
        })
    }
}


export const verifyResetCode = (data) => async (dispatch) => {
    try {
        const res = await postData("/api/v1/auth/verifyPassResetCode", data)
        dispatch({
            type: VERIFY_RESET_CODE,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: VERIFY_RESET_CODE,
            payload: `Error :${error}`
        })
    }
}


export const resetPassword = (data) => async (dispatch) => {
    try {
        const res = await updateData("/api/v1/auth/resetPassword", data)
        dispatch({
            type: RESET_PASSWORD,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: RESET_PASSWORD,
            payload: `Error :${error}`
        })
    }
}