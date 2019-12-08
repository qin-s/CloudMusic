import React from "react"
import "../../../assets/css/my/record.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
import myActionCreator from "../../../store/actionCreater/my"
import {connect} from "react-redux"
class LocalMusic extends React.Component{
    
    render(){
        const tabs = [
                  { title: '单曲' },
                  { title: '歌手' },
                  { title: '专辑' },
                  { title: '文件夹'}
                ];
        return (

        <div className="my-record">
            <div className="my-record-header">
                <div className="record-goback">
                    <span className="iconfont icon-flow" onClick={()=>this.props.history.go(-1)}></span>
                    <i>本地音乐</i>
                </div>
                <div className="record-icon">
                    <span className="iconfont icon-sousuo"></span>
                    <span className="iconfont icon-sandian"></span>
                </div>
            </div>
            <div className="tab-record" >
                <WhiteSpace />
                    <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />} 
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
                                    <span className="iconfont icon-laba"></span>
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
                                <span className="iconfont icon-laba"></span>
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
                                <span className="iconfont icon-laba"></span>
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
                        {/* 歌手 */}
                        <div className="singer">
                            <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt=""/>
                            <div className="singer-info">
                                <div className="singer-name">
                                    <p>周杰伦</p>
                                    <i>1首</i>
                                </div>
                                <span className="iconfont icon-laba"></span>
                            </div>
                        </div>
                        {/* 专辑 */}
                        <div className="singer album">
                            <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt=""/>
                            <div className="singer-info">
                                <div className="singer-name">
                                    <p>说好不哭</p>
                                    <i>1首 &nbsp;&nbsp;&nbsp;周杰伦</i>
                                </div>
                                <span className="iconfont icon-laba"></span>
                            </div>
                        </div>
                        {/* 文件夹 */}
                        <div className="singer folder">
                            <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt=""/>
                            <div className="singer-info">
                                <div className="singer-name">
                                    <p>song(QQ音乐)</p>
                                    <i>1首</i>
                                </div>
                                <span className="iconfont icon-laba"></span>
                            </div>
                        </div>
                    </Tabs>
                <WhiteSpace />
            </div>
        </div>
    )
}
componentDidMount(){
    this.$axios.get("/song/url",{
        params:{
            id:463121500
        }
    }).then(({data})=>{
        console.log("音乐url:",data)
    })
    this.props.getUserCouldList.call(this);
    }
}
function mapStateToProps(state){
    return {
        userCouldList:state.my.userCouldList
    }
}
function mapDispatchToProps(dispatch){
    return {
        getUserCouldList(){
            dispatch(myActionCreator.getUserCouldList.call(this))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LocalMusic)