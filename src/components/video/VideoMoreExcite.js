import React from "react"
import {connect} from "react-redux";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class VideoMoreExcite extends React.Component{
    render(){
        return (
            <div className={"videoMoreExcite"}>
               {
                    this.props.moreExciteMv.map((v,i)=>(
                        v.data.urlInfo?<div key={i}>
                        <WingBlank size="lg">
                            <WhiteSpace size="lg" />
                            <Card>                                    
                                <Card.Body>
                                    <div style={{textAlign:"center"}} className={"videoListen-videoDetail"}>
                                    <p className={"videoListen-playCount"}><i className={"iconfont icon-wodediantai"}>{v.data.playCount}</i></p>
                                        <video src={v.data.urlInfo.url} width="100%" height="250px" controls></video>:""
                                    </div>
                                </Card.Body>
                                <Card.Footer  style={{fontSize:"16px",
                                height:"30px",
                                borderBottom:"1px solid #eee"}} content={v.data.name}  />                      <Card.Header
                                    title={
                                        v.data.artists.map(x=>(
                                            x.name
                                        ))
                                    }
                                    style={{fontSize:"14px",color:"#eee",}}
                                    thumbStyle={{
                                        width:"32px",
                                        height:"32px",
                                        borderRadius:"16px"
                                    }}
                                    thumb={
                                        v.data.artists.map(x=>(
                                            <img key={""} src={x.img1v1Url} alt="" style={{width:"32px",
                                            height:"32px",
                                            borderRadius:"16px"}} />
                                        ))
                                    }
                                    extra={<span>
                                    <i className={"iconfont icon-wodediantai"}>{v.data.likeCount}</i>
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
    componentDidMount() {
        this.props.getMoreExciteList.call(this)
    }
}
function mapStateToProps(state) {
    return {
        moreExciteMv : state.video.moreExciteMv
        
    }
}
function mapDispatchToProps(dispatch){
    return {
        getMoreExciteList(){
            dispatch(async ()=>{
                const {data} = await this.$axios.get("/video/group",{
                    params:{
                        id:1000
                    }
                })
                dispatch({
                    type:"UP_MOREEXCITE_LIST",
                    payload:{
                        moreExciteMv:data.datas
                    }
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoMoreExcite)