import React from "react"
import VideoRecommend from "./VideoRecommend"
import VideoMoreExcite from "./VideoMoreExcite"
import squareRanking from "../../assets/images/square-ranking.jpg"
class VideoMv extends React.Component{
    render(){
        return (
            <div className={"video videoMv"}>
                <VideoRecommend {...this.props}></VideoRecommend>
                <div className={"videoRanking"} style={{
                    padding:"20px",
                    borderTop:"1px solid #ccc",
                    borderBottom:"1px solid #ccc"
                }} onClick={()=>this.props.history.push("/videoRanking")
                }>
                    <h2 style={{
                        lineHeight:"30px"
                    }}>排行榜 ></h2>
                    <p style={{
                        color:"#ccc"
                    }}>更新时间 11月29日</p>
                    <img src={squareRanking}  style={{width:"100px" ,height:"70px"}}alt=""/>
                </div>
                <VideoMoreExcite {...this.props}></VideoMoreExcite>
            </div>
        )
    }
    async componentDidMount(){
    }
}
export default VideoMv