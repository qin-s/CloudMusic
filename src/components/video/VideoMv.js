import React from "react"
import VideoRecommend from "./VideoRecommend"
class VideoMv extends React.Component{
    render(){
        return (
            <div>
                <VideoRecommend {...this.props}></VideoRecommend>
                <div className={"videoranking"} style={{
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
                </div>
                <div className={"videoMore"}>
                    <h3>更多精彩</h3>
                </div>
            </div>
        )
    }
}
export default VideoMv