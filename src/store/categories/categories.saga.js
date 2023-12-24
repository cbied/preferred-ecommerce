import { all, takeLatest, call, put } from 'redux-saga/effects'
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categories.actions"
import { FETCH_CATEGORIES_START } from "./categories.types"

export function* fetchCategoriesAsync() {
    try {

        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories')
        if (categoriesArray.length) {
            yield put(fetchCategoriesSuccess(categoriesArray))
        } else {
            yield put(fetchCategoriesFailed('error - categoriesArray is empty'))
            throw new Error(error => console.log(error));
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