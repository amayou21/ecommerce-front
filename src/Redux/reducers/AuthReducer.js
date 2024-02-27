import { FORGOT_PASSWORD, GET_LOGGED_USER, LOGIN, RESET_PASSWORD, SIGNUP, VERIFY_RESET_CODE } from "../type"


const initial = {
    SignUp: [],
    login: [],
    loggedUser: [],
    forgetPassword: [],
    verifyResetCode: [],
    resetPassword: [],

    loading: true
}

const AuthReducer = (state = initial, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                SignUp: action.payload,
                loading: false
            }
        case LOGIN:
            return {
                ...state,
                login: action.payload,
                loading: false

            }
        case GET_LOGGED_USER:
            return {
                ...state,
                loggedUser: action.payload,
                loading: false
            }
        case FORGOT_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
                loading: false
            }
        case VERIFY_RESET_CODE:
            return {
                ...state,
                verifyResetCode: action.payload,
                loading: false
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export default AuthReducer