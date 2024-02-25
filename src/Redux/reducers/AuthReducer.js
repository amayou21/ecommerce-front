import { GET_LOGGED_USER, LOGIN, SIGNUP } from "../type"


const initial = {
    SignUp: [],
    login: [],
    loggedUser: [],
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
                loggedUser: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export default AuthReducer