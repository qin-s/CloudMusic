import React from "react"
import {connect} from "react-redux"
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
class VideoScene extends React.Component{
    render(){
        return (
                <div className={"videoScene"}>
                {                    
                    this.props.videoScene.map((v,i)=>(
                        v.data.creator?<div key={i}>
                            <WingBlank size="lg">
                                <WhiteSpace size="lg" />
                                <Card>                                    
                                    <Card.Body>
                                        <div style={{textAlign:"center"}} className={"videoListen-videoDetail"}>
                                        <p className={"videoListen-playCount"}><i className={"iconfont icon-wodediantai"}>{v.data.playTime}</i></p>
                                        {
                                            v.data.urlInfo?<video src={v.data.urlInfo.url} width="100%" height="250px" controls></video>:""
                                        } 
                                        </div>
                                    </Card.Body>
                                    <Card.Footer  style={{fontSize:"16px",
                                    height:"30px",
                                    borderBottom:"1px solid #eee"}} content={v.data.title}  />                      <Card.Header
                                        title={
                                            v.data.creator?v.data.creator.nickname:""
                                        }
                                        style={{fontSize:"14px",color:"#eee",}}
                                        thumbStyle={{
                                            width:"32px",
                                            height:"32px",
                                            borderRadius:"16px"
                                        }}
                                        thumb={
                                            v.data.creator?v.data.creator.avatarUrl:""
                                        }
                                        extra={<span>
                                        <i className={"iconfont icon-wodediantai"}>{v.data.praisedCount}</i>
                                        <i className={"iconfont icon-wodediantai"}>{v.data.commentCount}</i>
                                            <i className={"iconfont icon-wodediantai"}></i>
                                        </span>}
                                    />          
                                </Card>
                                <WhiteSpace size="lg" />
                            </WingBlank>
                        </div>:<div key={i} style={{textAlign:"center"}}>{v.data.title}</div>
                    ))
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getSenceList.call(this)
    }
}
function mapStateToProps(state){
    return {
        videoScene:state.video.videoScene
    }
}
function mapDispatchToProps(dispatch){
    return {
        getSenceList(){
            dispatch(async ()=>{
                const {data} = await this.$axios.get("/video/group",{
                    params:{
                        id:58100
                    }
                })
                dispatch({
                    type:"UP_SCENE_LIST",
                    payload:{
                        videoScene:data.datas
                    }
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoScene)