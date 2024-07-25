import { put, takeLatest } from "redux-saga/effects";
import { ADD_PRODUCT_START, DELETE_PRODUCT_START, GET_PRODUCT_START, UPDATE_PRODUCT_START } from "../constants/product.constant";
import { addProductError, deleteProductError, getProductError, getProductStart, getProductSuccess, updateProductError } from "../actions/product.action";
import { addProductToAPI, deleteProductFromAPI, getProductFromAPI, updateProductToAPI } from "../services/product.service";

function* getProduct(){
    try {
        let products = yield getProductFromAPI()
        yield put(getProductSuccess(products))
    } catch (error) {
        yield put(getProductError(error.message))
    }
}

function* addProduct({payload}){
    try {
        yield addProductToAPI(payload)
        yield put(getProductStart())
    } catch (error) {
        yield put(addProductError(error.message))
    }
}

function* updateProduct({payload}){
    try {
        yield updateProductToAPI(payload.product, payload.id)
        yield put(getProductStart())
    } catch (error) {
        yield put(updateProductError(error.message))
    }
}

function* deleteProduct({payload}){
    try {
        yield deleteProductFromAPI(payload)
        yield put(getProductStart())
    } catch (error) {
        yield put(deleteProductError(error.message))
    }
}

export default function* product(){
    yield takeLatest(ADD_PRODUCT_START, addProduct)
    yield takeLatest(GET_PRODUCT_START, getProduct)
    yield takeLatest(UPDATE_PRODUCT_START, updateProduct)
    yield takeLatest(DELETE_PRODUCT_START, deleteProduct)
}