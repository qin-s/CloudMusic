import React from "react"
import daren from "../../assets/images/square_03.jpg"
import active1 from "../../assets/images/square_06.jpg"
import active2 from "../../assets/images/square_08.jpg"
import active3 from "../../assets/images/square_14.jpg"
import special1 from "../../assets/images/square_16.jpg"
import special2 from "../../assets/images/square_18.jpg"
import column from "../../assets/images/square_20.jpg"
import hot1 from "../../assets/images/square_22.jpg"
import hot2 from "../../assets/images/square_24.jpg"
class VideoSquare extends React.Component{
    render(){
        return (
            <div className={"videoSquare video"}>
                <div className={"videoSquare-pro"}>
                    <h3>达人计划</h3>
                    <div className={"videoSquare-img"}>
                        <img src={daren} onClick={
                            ()=>this.props.history.push("/squareDaren")
                        } alt={""}/>
                        <span>成为视频达人，享受多重福利</span>
                    </div>
                </div>    
                <div className={"videoSquare-pro"}>
                    <h3>有奖活动</h3>
                    <div className={"videoSquare-img"}>
                        <img onClick={
                            ()=>this.props.history.push("/squareCloud")
                        } src={active1} alt={""}/>
                        <span>来听我的，领视频酱的福利了</span>
                    </div>
                    <div className={"videoSquare-img"}>
                        <img src={active2} alt={""}/>
                        <span>发布视频还有现金分成</span>
                    </div>
                    <div className={"videoSquare-img"}>
                        <img src={active3} alt={""}/>
                        <span>成为视频达人享受多重福利</span>
                    </div>
                </div>    
                <div className={"videoSquare-pro"}>
                    <h3>专题</h3>
                    <div className={"videoSquare-img"}>
                        <img src={special1} alt={""}/>
                        <span>测测十年后的你是那种"骚"年</span>
                    </div>
                    <div className={"videoSquare-img"}>
                        <img src={special2} alt={""}/>
                        <span>假期打个卡，神清气爽赢福利</span>
                    </div>
                </div>    
                <div className={"videoSquare-pro"}>
                    <h3>专栏</h3>
                    <div className={"videoSquare-img"}>
                        <img src={column} alt={""}/>
                        <span>在吗？村长喊你来听Punchline</span>
                    </div>
                </div>    
                <div className={"videoSquare-pro videoSquare-pro-last"}>
                    <h3>热门榜单</h3>
                    <div className={"videoSquare-img"}>
                        <img src={hot1} alt={""}/>
                        <span>原创视频榜|魔鬼版戏精本精</span>
                    </div>
                    <div className={"videoSquare-img"}>
                        <img src={hot2} alt={""}/>
                        <span>视频达人榜|今天的你C位出道了么</span>
                    </div>
                </div>
                <p className={"videoSquare-end"}>厉害了，你刷到了底线</p>    
            </div>
        )
    }
}
export default VideoSquare