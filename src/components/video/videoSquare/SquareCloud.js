import React from "react"
import squareCloud from "../../../assets/images/square-cloud.jpg"
class SquareCloud extends React.Component{
    render(){
        return (
            <div>
                <div className="videoSquare-cloudHead">
                    <div>888</div>
                    <div>网易云音乐</div>
                    <div>分享</div>
                </div>
                <div className={"content"} style={{width:"100%"}}>
                    <img src={squareCloud} alt="" style={{width:"100%"}} />
                </div>
            </div>
        )
    }
}
export default SquareCloud