import {
    combineReducers
} from "redux"
import video from "./video"
import discover from "./discover"
import login from "./login"
export default combineReducers ({
    video,
    discover,
	login
})
