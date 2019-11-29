import React from "react"
import {connect} from "react-redux";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
class VideoRecommend extends React.Component{
    render(){
        return (
            <div style={{marginBottom:"150px"}}>
                {
                    this.props.recommendVideo.map(v=>(
                        <div key={v.id}>
                            <WingBlank size="lg">
                                <WhiteSpace size="lg" />
                                <Card>
                                    <Card.Body>
                                        <div className={"videoRec-mvDetail"} style={{textAlign:"center"}}>
                                            <p className={"videoRec-playCount"}><span className={"iconfont icon-wodediantai "}></span>{v.playCount}</p>
                                            <p className={"videoRec-duration"}><span className={"iconfont icon-wodediantai "}></span>{Math.floor(v.duration/1000/60)}:{v.duration/1000%60}</p>
                                            <img style={{
                                                width:"100%",
                                                height:"300px"
                                            }} alt={""} onClick={()=>this.props.history.push("/videoDetail/"+v.id)} src={v.picUrl} />
                                        </div>
                                    </Card.Body>
                                    <Card.Footer style={{fontSize:"16px",color:"#000"}} content={v.copywriter}   />
                                    <Card.Header
                                        title={v.name}
                                        style={{fontSize:"16px",color:"#eee"}}
                                        thumb=""
                                        extra={<span></span>}
                                    />
                                </Card>
                                <WhiteSpace size="lg" />
                            </WingBlank>
                        </div>
                    ))
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getRecommend.call(this)
    }
}
function mapStateToProps(state) {
    return {
        recommendVideo:state.video.recommendVideo
    }
}
function mapDispatchToProps(dispatch){
    return {
        getRecommend(){
            dispatch(()=>{
                this.$axios.get("/personalized/mv").then(({data})=>{
                    console.log(data)
                    dispatch({
                        type:"UP_RECOMMEND_LIST",
                        payload:{
                            recommendVideo:data.result
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoRecommend)