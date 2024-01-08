import { testSaga, expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { FETCH_CATEGORIES_START} from './categories.types'
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categories.actions';
import { fetchCategoriesAsync, onFetchCategories, categoriesSaga } from './categories.saga';

describe('categories saga', () => {
    test('categoriesSaga', () => {
        testSaga(categoriesSaga)
        .next()
        .all([call(onFetchCategories)])
        .next()
        .isDone()
    })

    test('onFetchCategories', () => {
        testSaga(onFetchCategories)
        .next()
        .takeLatest(FETCH_CATEGORIES_START, fetchCategoriesAsync)
        .next()
        .isDone()
    })

    test('fetchCategoriesAsync success', () => {
        const mockCategoriesArray = [
            { id: 1, name: 'Category 1'},
            { id: 2, name: 'Category 2'}
        ]
        return expectSaga(fetchCategoriesAsync)
                .provide([[call(getCategoriesAndDocuments, 'categories'), mockCategoriesArray]])
                .put(fetchCategoriesSuccess(mockCategoriesArray))
                .run()
    })

    // sometimes Firebase will NOT throw an error but still comes back with an empty array
    // since we cannot control a 3rd party, an if/else statement is in the try block 
    test('fetchCategoriesAsync "success" but comes back with empty array', () => {
        const mockError = new Error('error - categoriesArray is empty')
        return expectSaga(fetchCategoriesAsync)
                .provide([[call(getCategoriesAndDocuments, 'categories'), []]])
                .put(fetchCategoriesFailed(mockError))
                .run()
    })

    test('fetchCategoriesAsync failure', () => {
        const mockError = new Error('error')
        return expectSaga(fetchCategoriesAsync)
                .provide([[call(getCategoriesAndDocuments, 'categories'), throwError(mockError)]])
                .put(fetchCategoriesFailed(mockError))
                .run()
    })
})