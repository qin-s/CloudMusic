import React from "react"
import squareDaren from "../../../assets/images/square-daren.jpg"
class SquareDaren extends React.Component{
    render(){
        return (
            <div>
                <div className="videoSquare-darenHead">
                    <div>888</div>
                    <div>网易云音乐</div>
                    <div>分享</div>
                </div>
                <div className={"content"} style={{width:"100%"}}>
                    <img src={squareDaren} alt="" style={{width:"100%"}} />
                </div>
            </div>
        )
    }
}
export default SquareDaren