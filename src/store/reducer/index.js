import {
    combineReducers
} from "redux"
import video from "./video"
import discover from "./discover"
import login from "./login"
import my from "./my"
export default combineReducers ({
    video,
    discover,
    login,
    my
})
