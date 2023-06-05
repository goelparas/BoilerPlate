import { AuthActionType } from "./action.constants";

export const authaction = (authDetails: any) => ({
    type: AuthActionType.LOGIN,
    payload: authDetails
})