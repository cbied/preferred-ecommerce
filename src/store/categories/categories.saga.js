import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categories.actions";
import { FETCH_CATEGORIES_START } from "./categories.types";

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
        // sometimes Firebase will NOT throw an error but still comes back with an empty array
        // since we cannot control a 3rd party, an if/else statement is in the try block 
        if (categoriesArray.length) {
            yield put(fetchCategoriesSuccess(categoriesArray))
        } else {
            yield put(fetchCategoriesFailed('error - categoriesArray is empty'))
            throw new Error('error - categoriesArray is empty');
        }
    } catch(error) {
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories() {
    yield takeLatest(FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}