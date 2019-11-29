import {
    combineReducers
} from "redux"
import discover from './discover';
import account from "./account";
export default combineReducers ({
    discover,
    account
})
