import React from "react"
import {connect} from "react-redux";
// import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
class VideoRecommend extends React.Component{
    
    render(){
        return (
            <div className={"videoRecommend"}>
                <ul className={"videoRecommend-mvSelect"}>
                <div className={"videoRecommend-mvSelectH"}>MV精选<span>更多MV</span></div>
                {
                    this.props.recommendVideo.map((v,i)=>(
                        <li key={i}>
                            <p className={"videoRecommend-playCount"}>
                                {
                                    v.playCount>100000?(Math.floor(v.playCount/10000)+"万"):v.playCount
                                }
                            </p>
                             <img  alt={""} 
                             onClick={()=>this.props.history.push("/videoDetail/"+v.id)} src={v.picUrl} />
                            <p className="videoRecommend-detail">{v.name}</p>
                    <p>
                        {
                            v.artists.map(x=>x.name+" ")
                        }
                    </p>
                        </li>
                    ))
                }
            </ul>
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