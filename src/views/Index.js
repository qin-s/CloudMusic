import React from 'react';
import {
    Route,
    NavLink
} from "react-router-dom";
import Discover from "./home/Discover";
import My from "./home/My";
import Account from "./home/Account";
import Video from "./home/Video";
import GuardRouter from "../router/GuardRouter";
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
                <NavLink exact to={"/discover"}  className={"App-link"} activeClassName={"App-active"}>
                    <span className="iconfont icon-wangyiyunyinle2"></span>
                    <p>发现</p>
                </NavLink>
                <NavLink exact to={"/video"} className={"App-link"} activeClassName={"App-active"}>
                    <span className="iconfont icon-shipin"></span>
                    <p>视频</p>
                </NavLink>
                <NavLink exact to={"/"}  className={"App-link"} activeClassName={"App-active"}>
                    <span className="iconfont icon-yinyuered"></span>
                    <p>我的</p>
                </NavLink>
                <NavLink exact to={"/yuncun"}  className={"App-link"} activeClassName={"App-active"}>
                    <span className="iconfont icon-iconset0203"></span>
                    <p>云村</p>
                </NavLink>
                <NavLink exact to={"/account"}  className={"App-link"} activeClassName={"App-active"}>
                    <span className="iconfont icon-user"></span>
                    <p>账号</p>
                </NavLink>
            </nav>
        </div>
    );
}

export default App;


