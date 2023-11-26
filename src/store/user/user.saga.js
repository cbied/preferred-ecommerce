import { all, put, call, takeLatest } from 'redux-saga/effects'
import { CHECK_USER_SESSION } from './user.types'
import { signInSuccess, signInFailed } from './user.action'
import { getCurrentUser } from '../../utils/firebase/firebase.utils'

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        console.log(userAuth)
        if (!userAuth) return
        yield put(signInSuccess(userAuth))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}



export function* userSaga() {
    yield all([call(onCheckUserSession)]);
}