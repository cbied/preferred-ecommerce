import { all, put, call, takeLatest } from 'redux-saga/effects'
import { CHECK_USER_SESSION, EMAIL_SIGN_IN_START, GOOGLE_SIGN_IN_START } from './user.types'
import { signInSuccess, signInFailed } from './user.action'
import { getCurrentUser, createUserDocFromAuth, signInUserWithEmailAndPassword,
         signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
    try {
        const userSnapshot = yield call(
            createUserDocFromAuth, 
            userAuth, 
            additionalInfo
        )
        yield put(signInSuccess({ id: userSnapshot.id , ...userSnapshot.data() }))
        
    } catch (error) {
        yield put(signInFailed(error))
    }
}

// Check if user is signed in
export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

// Email Sign in
export function* onEmailSigninStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* signInWithEmailAndPassword({ payload: { email, password }}) {
    try {
        const { user } = yield call(
            signInUserWithEmailAndPassword,
            email,
            password)
        yield call(getSnapshotFromUserAuth, user)
        alert("User Signed in successfully")
    } catch (error) {
        console.log(error)
        yield put(signInFailed(error))
    }
}

// Google Sign in
export function* onGoogleSigninStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

// User Saga
export function* userSaga() {
    yield all([call(onCheckUserSession), call(onGoogleSigninStart), call(onEmailSigninStart)]);
}