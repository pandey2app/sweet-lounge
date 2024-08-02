import { put, takeLatest } from "redux-saga/effects";
import { ADD_CART_START, DELETE_CART_START, GET_CART_START, UPDATE_CART_START } from "../constants/cart.constant";
import { addCartToAPI, deleteCartFromAPI, getCartFromAPI, updateCartToAPI } from "../services/cart.service";
import { addCartError, deleteCartError, getCartError, getCartStart, getCartSuccess, updateCartError } from "../actions/cart.action";

function* getCart(){
    try {
        let carts = yield getCartFromAPI()
        yield put(getCartSuccess(carts))
    } catch (error) {
        yield put(getCartError(error.message))
    }
}

function* addCart({payload}){
    try {
        yield addCartToAPI(payload)
        yield put(getCartStart())
    } catch (error) {
        yield put(addCartError(error.message))
    }
}

function* updateCart({payload}){
    try {
        yield updateCartToAPI(payload.product, payload.id)
        yield put(getCartStart())
    } catch (error) {
        yield put(updateCartError(error.message))
    }
}

function* deleteCart({payload}){
    try {
        yield deleteCartFromAPI(payload)
        yield put(getCartStart())
    } catch (error) {
        yield put(deleteCartError(error.message))
    }
}

export default function* cart(){
    yield takeLatest(ADD_CART_START, addCart)
    yield takeLatest(GET_CART_START, getCart)
    yield takeLatest(UPDATE_CART_START, updateCart)
    yield takeLatest(DELETE_CART_START, deleteCart)
}