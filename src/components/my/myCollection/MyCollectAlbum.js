import React from "react"
import {connect} from "react-redux"
import myActionCreator from "../../../store/actionCreater/my"
class MyCollectAlbum extends React.Component{
    render(){
        return (
        <div className="tab-content">
            <div className="record-all-nav">
                <div className="record-all-nav-play">
                    收藏的专辑
                    <i>(共{this.props.collectAlbum.count}首)</i>
                </div>
            </div>
            <ul>
                {
                    this.props.collectAlbum.data?this.props.collectAlbum.data.map(v=>(
                        <li key={v.id}>
                            <img src={v.picUrl} alt="" style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
                            <div className="record-song">
                                <div className="record-song-name">
                                    <p>{v.name}</p>
                                    <div className="record-song-creator">
                                        <span className="iconfont icon-duihao"></span>
                                        {
                                            v.artists.map(i=>(
                                                <i key={i.id}>{i.name}&nbsp;&nbsp;</i>
                                            ))
                                        }
                                        
                                    </div>
                                </div>
                                <span className="iconfont icon-caidan-dian"></span>
                            </div>
                        </li>
                    )):<div className="none-record">暂无收藏</div>
                }
            </ul>
        </div>
        )
    }
    componentDidMount(){
       this.props.getCollectAblum.call(this);
    }
}
function mapStateToProps(state){
    return {
        collectAlbum:state.my.collectAlbum
    }
}
function mapDispatchToProps(dispatch){
    return {
        getCollectAblum(){
            dispatch(myActionCreator.getCollectAlbum.call(this))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCollectAlbum)