

import { Reducer } from "@reduxjs/toolkit";
import { AuthActionType } from "../actions/action.constants";
import { produce } from "immer";
export type AuthState = {
    userId?: string;
    userName?: string;
    userImage?: string;
    loading?: boolean;

}


const initialState: AuthState = {};


export const AuthReducer :Reducer<AuthState>= (state: AuthState = initialState, action: any) => 
produce(state, (draft: AuthState) => {

    switch (action.type) {
        case AuthActionType.LOGIN:
            {
                draft.userId = action.payload.image;
                draft.userImage = action.payload.image;
                break;
            }
         default :
         break;


    }

});
