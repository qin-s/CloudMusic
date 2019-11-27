import React from 'react';
import {
    Route,
    NavLink
} from "react-router-dom";
import Discover from "./home/Discover";
import My from "./home/My";
import Account from "./home/Account";
import Video from "./home/Video";
import GuardRouter from "../router/GuardRouter"
import YunCun from "./home/Yuncun";
function App() {
    return (
        <div className="App">
                <Route path={"/discover"} render={()=><GuardRouter component={Discover}></GuardRouter>} exact ></Route>
                <Route path={"/video"} exact render={()=><GuardRouter component={Video}></GuardRouter>}></Route>
                <Route path={"/"} exact render={()=><GuardRouter component={My}></GuardRouter>}></Route>
                <Route path={"/yuncun"} exact render={()=><GuardRouter component={YunCun}></GuardRouter>}></Route>
                <Route path={"/account"} exact render={()=><GuardRouter component={Account}></GuardRouter>}></Route>
            <nav>
                <NavLink exact to={"/discover"}  className={"App-link"} activeClassName={"App-active"}>发现</NavLink>
                <NavLink to={"/video"} exact className={"App-link"} activeClassName={"App-active"}>视频</NavLink>
                <NavLink exact to={"/"}  className={"App-link"} activeClassName={"App-active"}>我的</NavLink>
                <NavLink to={"/yuncun"}  className={"App-link"} activeClassName={"App-active"}>云村</NavLink>
                <NavLink to={"/account"}  className={"App-link"} activeClassName={"App-active"}>账号</NavLink>
            </nav>
        </div>
    );
}

export default App;