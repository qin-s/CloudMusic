import {
    combineReducers
} from "redux"
import video from "./video"
import discover from "./discover"
import login from "./login"
import yuncun from "./yuncun"
export default combineReducers ({
    video,
    discover,
    login,
    yuncun
})
