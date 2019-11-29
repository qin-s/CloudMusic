import React from "react"
import "../../../assets/css/my/record.css"
class RadioStation extends React.Component{
    render(){
        return (
        <div className="my-record">
            <div className="my-record-header">
                <div className="record-goback">
                    <span className="iconfont icon-flow" onClick={()=>this.props.history.go(-1)}></span>
                    <i>我的电台</i>
                </div>
            </div>
            <div className="record-all-nav">
                <div className="record-all-nav-play" style={{marginTop:"20px",fontSize:"16px"}}>
                    我创建的电台
                    <i style={{color:"silver",fontSize:"12px"}}>(共1首)</i>
                </div>
                <div className="radio-station">
                    空空如也
                </div>
            </div>
        </div>
    )
}

}
export default RadioStation