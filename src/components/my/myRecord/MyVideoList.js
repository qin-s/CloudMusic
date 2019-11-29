import React from "react"
class MyVideoList extends React.Component{
    constructor(){
        super();
        this.state = {
            videoList:[]
        }
    }
    render(){
        return (
            
        <div className="tab-content">
            {
                this.state.videoList.length?this.state.livingList.map(v=>(
                    <>
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
                        </ul>
                    </>
            
        )):<div className="none-record">暂无记录</div>
        }
            </div>
    )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default MyVideoList