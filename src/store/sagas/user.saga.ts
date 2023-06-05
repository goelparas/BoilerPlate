import { all, takeLatest } from "redux-saga/effects";
import { UserActionType } from "../actions/action.constants";
import { setDoc, db, doc } from "../../services/Firebase/firebaseconfig";


function* sendMessages(data: any) {
    
    Array.from(data.payload).forEach(async (item: any) => {
      
        await setDoc(doc(db, 'user',item.userId), item);

    })

    yield

}
function *setImages (data:any)
{
    yield
}

function* usersaga() {
    yield all([takeLatest(UserActionType.SEND_MESSAGE, sendMessages),
        takeLatest(UserActionType.SET_IMAGE, setImages)
    ])
}
export default usersaga;