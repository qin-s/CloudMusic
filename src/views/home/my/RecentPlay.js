import React from "react"
import "../../../assets/css/my/record.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
class RecentPlay extends React.Component{
    
    render(){
        const tabs = [
                  { title: '歌曲' },
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
                            }} onTabClick={(tab)=>{console.log(tab.title);
                            }}> 
                            {/* {this.renderContent} */}
                            <div className="tab-content">
                                <div className="record-all-nav">
                                    <div className="record-all-nav-play">
                                        <span className="iconfont icon-bofang1"></span>
                                        播放全部
                                        <i>(共1首)</i>
                                    </div>
                                    <div className="record-all-nav-choose">
                                        <span className="iconfont icon-sanheng"></span>
                                        <b>多选</b>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt="" />
                                        <div className="record-song">
                                            <div className="record-song-name">
                                                <p>说好不哭</p>
                                                <div className="record-song-creator">
                                                    <span className="iconfont icon-duihao"></span>
                                                    <i>周杰伦</i>
                                                </div>
                                            </div>
                                            <span className="iconfont icon-caidan-dian"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt="" />
                                        <div className="record-song">
                                            <div className="record-song-name">
                                                <p>说好不哭</p>
                                                <div className="record-song-creator">
                                                    <span className="iconfont icon-duihao"></span>
                                                    <i>周杰伦</i>
                                                </div>
                                            </div>
                                            <span className="iconfont icon-caidan-dian"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt="" />
                                        <div className="record-song">
                                            <div className="record-song-name">
                                                <p>说好不哭</p>
                                                <div className="record-song-creator">
                                                    <span className="iconfont icon-duihao"></span>
                                                    <i>周杰伦</i>
                                                </div>
                                            </div>
                                            <span className="iconfont icon-caidan-dian"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
    // renderContent = tab =>(   
    // <div style={{ display: 'flex', backgroundColor: 'red' }}>
    //         <div className="">
    //         {tab.title}
    //         </div>
    //  </div>
    // )
}
export default RecentPlay