import React from "react"
import {
    connect
} from "react-redux"
import "../../assets/css/video/video.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
import VideoRecommend from "../../components/video/VideoRecommend";
import VideoAll from "../../components/video/VideoAll"
import VideoNew from "../../components/video/VideoNew";
import VideoNetEase from "../../components/video/VideoNetEase";
import VideoEvery from "../../components/video/VideoEvery";
import VideoListenBGM from "../../components/video/VideoListenBGM";
class Video extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[
                { title: '听BGM' },
                { title: '全部' },

                { title: '推荐' },
                { title: '最新' },
                { title: '网易出品' },
                {title:'视频'}
            ],
            num:0,
        }
    }
    render(){
        return (
            <div className={"videoContent"}>
                <WhiteSpace style={{height:"10px",background:"#fff"}} />
                <Tabs className={"video-tabbar"} tabBarTextStyle={{fontSize:"20px"}}
                      tabBarActiveTextColor="red"
                      tabBarUnderlineStyle={{borderBottomColor:"#f00",backgroundColor:"#fff"}}
                      tabs={this.state.arr} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    <VideoListenBGM {...this.props}></VideoListenBGM>
                    <VideoEvery {...this.props}></VideoEvery>
                    <VideoRecommend {...this.props}></VideoRecommend>
                    <VideoAll {...this.props}></VideoAll>
                    <VideoNew {...this.props}></VideoNew>
                    <VideoNetEase {...this.props}></VideoNetEase>
                </Tabs>
            </div>
        )
    }
    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:"100px", height: '200px',lineHeigth:'40px', backgroundColor: '#fff' }}>
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