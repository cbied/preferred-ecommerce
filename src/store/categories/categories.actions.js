import { createAction } from "../../utils/reducer/reducer.utils";
import { SET_CATEGORIES } from "./categories.types";

export const setCategories = (categoriesArray) => {
    return createAction(SET_CATEGORIES, categoriesArray)
}