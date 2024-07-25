import { ADD_USER_ERROR, ADD_USER_START, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS, LOGIN_USER_ERROR, LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGOUT_USER_ERROR, LOGOUT_USER_START, LOGOUT_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_START, UPDATE_USER_SUCCESS } from "../constants/user.constant"

// add user
export const addUserStart = (user)=>({
    type : ADD_USER_START,
    payload : user
})

export const addUserSuccess = (user)=>({
    type : ADD_USER_SUCCESS,
    payload : user
})

export const addUserError = (error)=>({
    type : ADD_USER_ERROR,
    payload : error
})

// get user
export const getUserStart = ()=>({
    type : GET_USER_START,
})

export const getUserSuccess = (categories)=>({
    type : GET_USER_SUCCESS,
    payload : categories
})

export const getUserError = (error)=>({
    type : GET_USER_ERROR,
    payload : error
})

// update user
export const updateUserStart = (user, id)=>({
    type : UPDATE_USER_START,
    payload : {
        user,
        id
    }
})

export const updateUserSuccess = (user, id)=>({
    type : UPDATE_USER_SUCCESS,
    payload : {
        user,
        id
    }
})

export const updateUserError = (error)=>({
    type : UPDATE_USER_ERROR,
    payload : error
})

// Delete user
export const deleteUserStart = (id)=>({
    type : DELETE_USER_START,
    payload : id
})

export const deleteUserSuccess = (id)=>({
    type : DELETE_USER_SUCCESS,
    payload : id
})

export const deleteUserError = (error)=>({
    type : DELETE_USER_ERROR,
    payload : error
})

// Login user
export const loginUserStart = (user)=>({
    type : LOGIN_USER_START,
    payload : user
})

export const loginUserSuccess = (user)=>({
    type : LOGIN_USER_SUCCESS,
    payload : user
})

export const loginUserError = (error)=>({
    type : LOGIN_USER_ERROR,
    payload : error
})

// Logout user
export const logoutUserStart = ()=>({
    type : LOGOUT_USER_START,
})

export const logoutUserSuccess = ()=>({
    type : LOGOUT_USER_SUCCESS,
})

export const logoutUserError = (error)=>({
    type : LOGOUT_USER_ERROR,
    payload : error
})
