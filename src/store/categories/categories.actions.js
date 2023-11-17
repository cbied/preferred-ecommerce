import { createAction } from "../../utils/reducer/reducer.utils";
import { SET_CATEGORIES_MAP } from "./categories.types";

export const setCategoriesMap = (categories) => {
    return createAction(SET_CATEGORIES_MAP, categories)
}