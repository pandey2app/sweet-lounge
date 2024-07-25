import { put, takeLatest } from "redux-saga/effects";
import { ADD_CATEGORY_START, DELETE_CATEGORY_START, GET_CATEGORY_START, UPDATE_CATEGORY_START } from "../constants/category.constant";
import { addCategoryError, deleteCategoryError, getCategoryError, getCategoryStart, getCategorySuccess, updateCategoryError } from "../actions/category.action";
import { addCategoryToAPI, deleteCategoryFromAPI, getCategoryFromAPI, updateCategoryToAPI } from "../services/category.service";

function* getCategory(){
    try {
        let categories = yield getCategoryFromAPI()
        yield put(getCategorySuccess(categories))
    } catch (error) {
        yield put(getCategoryError(error.message))
    }
}

function* addCategory({payload}){
    try {
        yield addCategoryToAPI(payload)
        yield put(getCategoryStart())
    } catch (error) {
        yield put(addCategoryError(error.message))
    }
}

function* updateCategory({payload}){
    try {
        yield updateCategoryToAPI(payload.category, payload.id)
        yield put(getCategoryStart())
    } catch (error) {
        yield put(updateCategoryError(error.message))
    }
}

function* deleteCategory({payload}){
    try {
        yield deleteCategoryFromAPI(payload)
        yield put(getCategoryStart())
    } catch (error) {
        yield put(deleteCategoryError(error.message))
    }
}

export default function* category(){
    yield takeLatest(ADD_CATEGORY_START, addCategory)
    yield takeLatest(GET_CATEGORY_START, getCategory)
    yield takeLatest(UPDATE_CATEGORY_START, updateCategory)
    yield takeLatest(DELETE_CATEGORY_START, deleteCategory)
}