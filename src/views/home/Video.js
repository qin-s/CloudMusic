import React from "react"
import {
    connect
} from "react-redux"

import "../../assents/css/video/video.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
import VideoRecommend from "../../components/video/VideoRecommend";
import VideoAll from "../../components/video/VideoAll"
import VideoNew from "../../components/video/VideoNew";
import VideoNetEase from "../../components/video/VideoNetEase";
class Video extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[
                { title: '全部' },
                { title: '推荐' },
                { title: '最新' },
                { title: '网易出品' },
            ],
            num:0,
        }
    }
    render(){
        return (
            <div className={"videoContent"}>
                <WhiteSpace />
                <Tabs tabs={this.state.arr} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    <VideoAll {...this.props}></VideoAll>
                    <VideoRecommend {...this.props}></VideoRecommend>
                    <VideoNew {...this.props}></VideoNew>
                    <VideoNetEase {...this.props}></VideoNetEase>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <p>Content of {tab.title}</p>
        </div>);

}
function mapStateToProps(state,props){
    return {
    }
}
function mapDispatchToProps(dispatch){
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Video)