import React from "react"
class MySongRecord extends React.Component{
    render(){
        return (
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
                {
                    this.props.location.state.userRecordList?this.props.location.state.userRecordList.map(v=>(
                            <li key={v.song.id}>
                        <img src={v.song.al.picUrl} alt="" />
                            <div className="record-song">
                                <div className="record-song-name">
                                    <p>{v.song.name}</p>
                                    <div className="record-song-creator">
                                        <span className="iconfont icon-duihao"></span>
                                        {
                                            v.song.ar.map(i=>(
                                                <i key={i.id}>
                                                    {i.name}&nbsp;
                                                </i>
                                            ))
                                        }
                                    </div>
                                </div>
                                <span className="iconfont icon-caidan-dian"></span>
                            </div>
                        </li>
                    )):<div className="none-record">暂无记录</div>
                }
            
            </ul>
        </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state)
    }
}
export default MySongRecord