import React from "react"
import "../../../assets/css/my/record.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
import MySongRecord from "../../../components/my/myRecord/MySongRecord"
import MyLivingList from "../../../components/my/myRecord/MyLivingList"
import MyVideoList from "../../../components/my/myRecord/MyVideoList";
class RecentPlay extends React.Component{
    render(){
        const tabs = [
                  { title: '歌曲'+this.props.location.state.userRecordList.length},
                  { title: '直播' },
                  { title: '视频' },
                ];
        return (

            <div className="my-record">
                <div className="my-record-header">
                    <div className="record-goback">
                        <span className="iconfont icon-flow" onClick={()=>this.props.history.go(-1)}></span>
                        <i>最近播放</i>
                    </div>
                    <p>清空</p>
                </div>
                <div className="tab-record" >
                    <WhiteSpace />
                        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />} 
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
                            <MySongRecord {...this.props}></MySongRecord>
                            <MyLivingList {...this.props}></MyLivingList>
                            <MyVideoList {...this.props}></MyVideoList>
                        </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props)
    }
}
export default RecentPlay