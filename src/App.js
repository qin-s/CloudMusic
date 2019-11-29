import React from 'react';
import "./assets/iconfont/iconfont.css";
import './App.css';
import {
    Route,
    Switch,
} from "react-router-dom";
import Login from "./views/Login"
import Index from "./views/Index";
import VideoDetail from "./views/home/video/VideoDetail.js"
import MySongList from "./views/home/my/MySongList"
import RecentPlay from "./views/home/my/RecentPlay"
import LocalMusic from "./views/home/my/LocalMusic"
import RadioStation from "./views/home/my/RadioStation"
import MyCollect from "./views/home/my/MyCollect"
function App() {
  return (
    <div className="App">
        <Switch>
            <Route path={"/mycollect"} component={MyCollect}></Route>
            <Route path={"/radiostation"} component={RadioStation}></Route>
            <Route path={"/localmusic"} component={LocalMusic}></Route>
            <Route path={"/record"} component={RecentPlay}></Route>
            <Route path={"/songlist"} component={MySongList}></Route>
            <Route path={"/login"} component={Login}></Route>
            <Route path={"/videoDetail/:id"} component={VideoDetail}></Route>
            <Route path={"/"} component={Index}></Route>
        </Switch>
    </div>
  );
}

export default App;
