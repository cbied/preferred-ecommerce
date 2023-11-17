import { createAction } from "../../utils/reducer/reducer.utils"
import { SET_CURRENT_USER } from './user.types'


export const setCurrentUser = (user) => {
        return createAction(SET_CURRENT_USER, user);
    }