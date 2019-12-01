import React from 'react';
import "./assets/iconfont/iconfont.css";
import './App.css';
import {
    Route,
    Switch,
} from "react-router-dom";
import Login from "./views/Login"
import Zhuce from "./views/Zhuce"
import Index from "./views/Index";
import VideoDetail from "./views/home/video/VideoDetail.js"
import MySongList from "./views/home/my/MySongList"
import RecentPlay from "./views/home/my/RecentPlay"
import Hotwall from "./views/home/yuncun/Hotwall"
function App() {
  return (
    <div className="App">
        <Switch>

            <Route path={"/hotwall"} component={Hotwall}></Route>
            <Route path={"/record"} component={RecentPlay}></Route>
            <Route path={"/songlist"} component={MySongList}></Route>
            <Route path={"/login"} component={Login}></Route>
            <Route path={"/zhuce"} component={Zhuce}></Route>
            <Route path={"/videoDetail/:id"} component={VideoDetail}></Route>
            <Route path={"/"} component={Index}></Route>

        </Switch>
    </div>
  );
}

export default App;
