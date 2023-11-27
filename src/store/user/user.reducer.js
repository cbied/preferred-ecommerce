import { SET_CURRENT_USER, CHECK_USER_SESSION, SIGN_UP_USER_START, 
         GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START, SIGN_IN_SUCCESS, 
         SIGN_IN_FAILED  } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        case CHECK_USER_SESSION:
            return {
                ...state,
                currentUser: payload
            }
        case SIGN_UP_USER_START:
            return {
                ...state,
                isLoading: true
            }
        case GOOGLE_SIGN_IN_START:
            return {
                ...state,
                isLoading: true
            }
        case EMAIL_SIGN_IN_START:
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: payload
            }
        case SIGN_IN_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
}