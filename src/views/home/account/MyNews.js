import "../../../assets/css/account/accountMyNews.css";
import React from "react";
import {
    Route,
    NavLink
} from "react-router-dom";
import GuardRouter from "../../../router/GuardRouter";
import AtMe from "./AtMe";
import Comment from "./Comment";
import Notice from "./Notice";
import PrivateLetter from "./PrivateLetter";
function MyNewsApp(){
    return (
        <div >
            <nav>
                <NavLink exact to={"/atMe"}>@我</NavLink>
                <NavLink exact to={"/comment"}>评论</NavLink>
                <NavLink exact to={"/notice"}> 通知</NavLink>
                <NavLink exact to={"/privateLetter"}>私信</NavLink>
            </nav>
            <Route exact path={"/atMe"} render={() => <GuardRouter component={AtMe}></GuardRouter>} ></Route>
            <Route exact path={"/comment"} render={() => <GuardRouter component={Comment}></GuardRouter>}></Route>
            <Route exact path={"/notice"} render={() => <GuardRouter component={Notice}></GuardRouter>}></Route>
            <Route exact path={"/privateLetter"} render={() => <GuardRouter component={PrivateLetter}></GuardRouter>}></Route>
        </div>
    )
}
export default MyNewsApp;
