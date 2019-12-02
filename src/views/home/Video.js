import React from "react"
import {
    connect
} from "react-redux"
import daiyutong from  "../../assets/images/daiyutong.jpg"
import "../../assets/css/video/video.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
import VideoMv from "../../components/video/VideoMv"
import VideoListenBGM from "../../components/video/VideoListenBGM";
import VideoScene from "../../components/video/VideoScene";
import VideoAcgMusic from "../../components/video/VideoAcgMusic";
import VideoCover from "../../components/video/VideoCover"
import VideoDance from "../../components/video/VideoDance"
import VideoGame from "../../components/video/VideoGame"
import VideoSquare from "../../components/video/VideoSquare"
class Video extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[
                { title: '听BGM' },
                {title:'现场'},
                {title:'戴羽彤'},
                {title:'翻唱'},
                {title:'广场'},
                { title: 'MV' },
                { title: '舞蹈' },
                { title: 'ACG音乐' },
                { title: '游戏' },
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
                          <VideoScene {...this.props}></VideoScene>
                            <div style={{width:"100%",textAlign:"center"}}> <img src={daiyutong} style={{
                                width:"100%"
                            }} /></div>
                    <VideoCover {...this.props}></VideoCover>
                    <VideoSquare {...this.props}></VideoSquare>
                    <VideoMv {...this.props}></VideoMv>
                    <VideoDance {...this.props}></VideoDance>
                    <VideoAcgMusic {...this.props}></VideoAcgMusic>
                    <VideoGame {...this.props}></VideoGame>
                </Tabs>
            </div>
        )
    }
    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:"100px", height: '200px',lineHeigth:'40px', backgroundColor: '#fff' }}>
            <p>Content of {tab.title}</p>
        </div>);
        async componentDidMount(){
            const {data} = await this.$axios.get("/video/group/list")
            // const {data} = await this.$axios.get("/personalized/privatecontent")
            // const {data} = await this.$axios.get("/video/group",{
            //     params:{
            //         id:26141
            //     }
            // })
            console.log(data)
        }
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