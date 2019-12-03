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
import SquareCloud from "./components/video/videoSquare/SquareCloud"
import SquareDaren from "./components/video/videoSquare/SquareDaren"
import VideoDetail from "./views/home/video/VideoDetail.js"
import MySongList from "./views/home/my/MySongList"
import RecentPlay from "./views/home/my/RecentPlay"
import Hotwall from "./views/home/yuncun/Hotwall"
import VideoRanking from "./views/home/video/VideoRanking"
import LocalMusic from "./views/home/my/LocalMusic"
import RadioStation from "./views/home/my/RadioStation"
import MyCollect from "./views/home/my/MyCollect"
import DaySongs from './views/home/discover/DaySongs';
import SongSheet from './views/home/discover/SongSheet';
import RanKing from './views/home/discover/RanKing';
import PushSheet from './views/home/discover/PushSheet';
import MyNews from './views/home/account/MyNews';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path={"/hotwall"} component={Hotwall}></Route>
            <Route path={"/mycollect"} component={MyCollect}></Route>
            <Route path={"/radiostation"} component={RadioStation}></Route>
            <Route path={"/localmusic"} component={LocalMusic}></Route>
            <Route path={"/record"} component={RecentPlay}></Route>
            <Route path={"/songlist"} component={MySongList}></Route>
            <Route path={"/login"} component={Login}></Route>
            <Route path={"/zhuce"} component={Zhuce}></Route>
            <Route path={"/squareDaren"} component={SquareDaren}></Route>
            <Route path={"/squareCloud"} component={SquareCloud}></Route>
            <Route path={"/videoDetail/:id"} component={VideoDetail}></Route>
            <Route path={"/videoRanking"} component={VideoRanking}></Route>
            <Route path={"/daysongs"} component={DaySongs}></Route>
            <Route path={"/songsheet"} component={SongSheet}></Route>
            <Route path={"/ranking"} component={RanKing}></Route>
            <Route path={"/pushsheet/:id"} component={PushSheet}></Route>
            <Route path={"/mynews"} component={MyNews}></Route>
            <Route path={"/"} component={Index}></Route>

        </Switch>
    </div>
  );
}

export default App;
