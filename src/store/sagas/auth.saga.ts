import { takeLatest, all } from "redux-saga/effects";
import { AuthActionType } from "../actions/action.constants";

function* loginSaga() {
    // here is the code to do authentication implementation 
    try {
        console.log("Logged in")
    }
    catch (error) {

        yield
    }
}

export default function* authsaga() {
    yield all([takeLatest(AuthActionType.LOGIN, loginSaga)])
}