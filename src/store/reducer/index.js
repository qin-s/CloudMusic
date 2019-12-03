import {
    combineReducers
} from "redux"
import video from "./video"
import discover from "./discover"
import login from "./login"

import yuncun from "./yuncun"
import my from "./my"
import account from "./account"
export default combineReducers ({
    video,
    discover,
    login,
    yuncun,
    my,
    account

})
