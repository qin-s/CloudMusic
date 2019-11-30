import React from "react"
import {connect} from "react-redux";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
class VideoNew extends React.Component{
    render(){
        return (
            <div style={{marginBottom:"150px"}}>
                {
                    this.props.videoNew.map(v=>(
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
        this.props.getNew.call(this)
    }
}
function mapStateToProps(state) {
    return {
        videoNew:state.video.videoNew,
    }
}
function mapDispatchToProps(dispatch){
    return {
        getNew(){
            dispatch(()=>{
                this.$axios.get("/mv/first",{
                    params:{
                        limit:10
                    }
                }).then(({data})=>{
                    console.log(data.data)
                    dispatch({
                        type:"UP_NEW_LIST",
                        payload:{
                            videoNew:data.data
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoNew)