import { put, takeLatest } from "redux-saga/effects";
import { ADD_USER_START, DELETE_USER_START, GET_USER_START, LOGIN_USER_START, LOGOUT_USER_START, UPDATE_USER_START } from "../constants/user.constant";
import { addUserError, deleteUserError, getUserError, getUserStart, getUserSuccess, loginUserError, loginUserSuccess, logoutUserError, logoutUserSuccess, updateUserError } from "../actions/user.action";
import { addUserToAPI, deleteUserFromAPI, getUserFromAPI, updateUserToAPI } from "../services/user.service";

function* getUser(){
    try {
        let users = yield getUserFromAPI()
        yield put(getUserSuccess(users))
    } catch (error) {
        yield put(getUserError(error.message))
    }
}

function* addUser({payload}){
    try {
        yield addUserToAPI(payload)
        yield put(getUserStart())
    } catch (error) {
        yield put(addUserError(error.message))
    }
}

function* updateUser({payload}){
    try {
        yield updateUserToAPI(payload.user, payload.id)
        yield put(getUserStart())
    } catch (error) {
        yield put(updateUserError(error.message))
    }
}

function* deleteUser({payload}){
    try {
        yield deleteUserFromAPI(payload)
        yield put(getUserStart())
    } catch (error) {
        yield put(deleteUserError(error.message))
    }
}

function* loginUser({payload}){
    try {
        yield put(loginUserSuccess(payload))
    } catch (error) {
        yield put(loginUserError(error.message))
    }
}

function* logoutUser(){
    try {
        yield put(logoutUserSuccess())
    } catch (error) {
        yield put(logoutUserError(error.message))
    }
}

export default function* user(){
    yield takeLatest(ADD_USER_START, addUser)
    yield takeLatest(GET_USER_START, getUser)
    yield takeLatest(UPDATE_USER_START, updateUser)
    yield takeLatest(DELETE_USER_START, deleteUser)
    yield takeLatest(LOGIN_USER_START, loginUser)
    yield takeLatest(LOGOUT_USER_START, logoutUser)
}