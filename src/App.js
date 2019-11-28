import React from 'react';
import "./assents/iconfont/iconfont.css";
import './App.css';
import {
    Route,
    Switch,
} from "react-router-dom";
import Login from "./views/Login"
import Index from "./views/Index";
import VideoDetail from "./views/home/video/VideoDetail.js"
function App() {
  return (
    <div className="App">
        <Switch>
            <Route path={"/login"} component={Login}></Route>
            <Route path={"/videoDetail/:id"} component={VideoDetail}></Route>
            <Route path={"/"} component={Index}></Route>
        </Switch>
    </div>
  );
}

export default App;
