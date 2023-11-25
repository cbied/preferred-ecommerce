import { createAction } from "../../utils/reducer/reducer.utils";
import { SET_CATEGORIES, 
         FETCH_CATEGORIES_START, 
         FETCH_CATEGORIES_SUCCESS, 
         FETCH_CATEGORIES_FAILED } from "./categories.types";
// import  { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

export const setCategories = (categoriesArray) => {
    return createAction(SET_CATEGORIES, categoriesArray)
}

export const fetchCategoriesStart = () => {
    return createAction(FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(FETCH_CATEGORIES_SUCCESS, categoriesArray)
}

export const fetchCategoriesFailed = (error) => {
    return createAction(FETCH_CATEGORIES_FAILED, error)
}

// thunk
// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart())
//     try {
//         const categoriesArray = await getCategoriesAndDocuments('categories')
//         dispatch(fetchCategoriesSuccess(categoriesArray))
//     } catch(error) {
//         dispatch(fetchCategoriesFailed(error))
//     }
// }