import React from "react"
import {connect} from "react-redux";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class VideoNetEase extends React.Component{
    render(){
        return (
            <div style={{marginBottom:"150px"}}>
                {
                    this.props.videoNetEase.map(v=>(
                        <div key={v.id}>
                            <WingBlank size="lg">
                                <WhiteSpace size="lg" />
                                <Card>
                                    <Card.Body>
                                        <div style={{textAlign:"center"}}>
                                            <img style={{
                                                width:"100%",
                                                height:"300px"
                                            }} alt={""} onClick={()=>this.props.history.push("/videoDetail/"+v.id)} src={v.cover} />
                                        </div>
                                    </Card.Body>
                                    <Card.Footer  style={{fontSize:"16px"}} content={v.briefDesc}  />
                                    <Card.Header
                                        title={v.name}
                                        style={{fontSize:"18px",color:"#000",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            width: "500px"}}
                                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
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
        this.props.getNetEase.call(this)
    }
}
function mapStateToProps(state) {
    return {
        videoNetEase:state.video.videoNetEase
    }
}
function mapDispatchToProps(dispatch){
    return {
        getNetEase(){
            dispatch(()=>{
                this.$axios.get("/mv/exclusive/rcmd",{
                    params:{
                        limit:10
                    }
                }).then(({data})=>{
                    dispatch({
                        type:"UP_NETEASE_LIST",
                        payload:{
                            videoNetEase:data.data
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoNetEase)