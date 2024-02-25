import { SIGNUP } from "../type"


const initial = {
    userSignUp: [],
    loading: true
}

const signupReducer = (state = initial, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                userSignUp: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export default signupReducer