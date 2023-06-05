import { all, fork } from "redux-saga/effects";
import usersaga from "./user.saga";
import authsaga from "./auth.saga";


export default function *rootsaga(){
    yield all([fork(usersaga), fork(authsaga)])
}