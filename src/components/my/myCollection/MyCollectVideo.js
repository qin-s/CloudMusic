import React from "react"
import myActionCreator from "../../../store/actionCreater/my"
import {connect} from "react-redux"
class MyCollectSinger extends React.Component{
    render(){
        return(
            <>
            {
                this.props.collectMV.data?this.props.collectMV.data.map(v=>(
                     <div className="singer" key={v.vid}>
                         <div style={{position:"relative"}}><img src={v.coverUrl} alt="" style={{width:"150px",height:"70px",borderRadius:"0"
                            }}/>
                            <div style={{position:"absolute",top:"0",right:"0",color:"white",display:"flex",zIndex:"99",padding:"4px",fontSize:"10px"
                            }}>
                            <span className="iconfont icon-triangle"></span>
                            <i>{v.playTime?this.$tools.playTime(v.playTime):0}万</i>
                        </div>
                        </div>
                        
                        <div className="singer-info">
                            <div className="singer-name">
                                <p>{v.title}</p>
                                <i>{this.$tools.durationms(v.durationms)} by {
                                    v.creator.map(i=>(
                                        <i key={i.userId}>{i.userName}</i>
                                    ))
                                }
                                </i>
                            </div>
                            <span className="iconfont icon-caidan-dian" style={{fontSize:"22px"}}></span>
                        </div>
                        
                    </div>
                )):<div className="none-record" style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%",
                    height:"200px",
                    color:"chocolate"
                }}>暂无收藏</div>
            }
            </>
        )
    }
    componentDidMount(){
        this.props.getCollectMV.call(this)
    }
}
function mapStateToProps(state){
    return {
        collectMV:state.my.collectMV
    }
}
function mapDispatchToProps(dispatch){
    return {
        getCollectMV(){
            dispatch(myActionCreator.getCollectMV.call(this))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCollectSinger)