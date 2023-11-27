import { createAction } from "../../utils/reducer/reducer.utils"
import { SET_CURRENT_USER, CHECK_USER_SESSION, GOOGLE_SIGN_IN_START,
         EMAIL_SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from './user.types'

export const setCurrentUser = (user) => {
        return createAction(SET_CURRENT_USER, user);
    }

export const checkUserSession = () => {
    return createAction(CHECK_USER_SESSION);
}

export const googleSignInStart = () => {
    return createAction(GOOGLE_SIGN_IN_START);
}

export const emailSignInStart = (email, password) => {
    return createAction(EMAIL_SIGN_IN_START, { email, password });
}

export const signInSuccess = (user) => {
    return createAction(SIGN_IN_SUCCESS, user);
}

export const signInFailed = (error) => {
    return createAction(SIGN_IN_FAILED, error);
}
