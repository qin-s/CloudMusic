import React from "react"
import "../../../assets/css/my/record.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
import MyCollectAlbum from "../../../components/my/myCollection/MyCollectAlbum"
import MyCollectSinger from "../../../components/my/myCollection/MyCollectSinger"
import MyCollectColumn from "../../../components/my/myCollection/MyCollectColumn"
import MyCollectMlog from "../../../components/my/myCollection/MyCollectMlog"
import MyCollectVideo from "../../../components/my/myCollection/MyCollectVideo"
class MyCollect extends React.Component{
    
    render(){
        const tabs = [
                  { title: '专辑' },
                  { title: '歌手' },
                  { title: '视频' },
                  { title: '专栏'},
                  { title: 'Mlog'}
                ];
        return (

        <div className="my-record">
            <div className="my-record-header">
                <div className="record-goback">
                    <span className="iconfont icon-flow" onClick={()=>this.props.history.go(-1)}></span>
                    <i>我的收藏</i>
                </div>
                <div className="record-icon">
                    <span className="iconfont icon-sousuo"></span>
                </div>
            </div>
            <div className="tab-record" >
                <WhiteSpace />
                    <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />} 
                    tabBarActiveTextColor={"red"} 
                    tabBarTextStyle={{
                        fontSize:"14px",
                        padding:"20px 0"
                    }}
                    tabBarUnderlineStyle={{
                        backgroundColor:"red",
                        border:"1px solid red",
                        }}> 
                        {/* {this.renderContent} */}
                        {/* 专辑 */}
                        <MyCollectAlbum></MyCollectAlbum>
                        {/* 歌手 */}
                        <MyCollectSinger></MyCollectSinger>
                        {/* 视频 */}
                        <MyCollectVideo></MyCollectVideo>
                        {/* 专栏 */}
                        <MyCollectColumn></MyCollectColumn>
                        {/* 文件夹 */}
                       <MyCollectMlog></MyCollectMlog>
                    </Tabs>
                <WhiteSpace />
            </div>
        </div>
    )
}
}
export default MyCollect