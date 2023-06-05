import { UserActionType } from "./action.constants";


export const SendMessagesAction = (message:any)=>({
    type:UserActionType.SEND_MESSAGE,
    payload:message
})