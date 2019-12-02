import React from "react"
import "../../../assets/css/my/record.css"
class RadioStation extends React.Component{
    constructor(){
        super()
            this.state = {
                radioLList:[]
            }
    }
    render(){
        return (
        <div className="my-record">
            <div className="my-record-header">
                <div className="record-goback">
                    <span className="iconfont icon-flow" onClick={()=>this.props.history.go(-1)}></span>
                    <span style={{fontSize:"16px"}}>我的电台</span>
                </div>
            </div>
            <div className="record-all-nav">
                <div className="record-all-nav-play" style={{marginTop:"20px",fontSize:"14px"}}>
                    我创建的电台
                    <i style={{color:"silver",fontSize:"12px"}}>(0)</i>
                </div>
                <div className="radio-station">
                    <span className="iconfont icon-maikefeng-xian"></span>
                    <div className="radio-apply">
                        <p>申请做主播</p>
                        <span className="iconfont icon-right-arrow"></span>
                    </div>
                </div>
            </div>
            <div className="mySubscribe">
                <div className="record-all-nav-play" style={{marginTop:"20px",fontSize:"14px"}}>我订阅的电台
                    <i style={{color:"silver",fontSize:"12px"}}>({this.props.location.state.myRadioInfo.length})</i>
                </div>
                    {
                    this.props.location.state.myRadioInfo?this.props.location.state.myRadioInfo.map(v=>(
                <div className="singer album" key={v.id}>
                    <img src={v.picUrl} alt="" style={{borderRadius:"10px",width:"100px",height:"80px"}}/>
                    <div className="singer-info" >
                        <div className="singer-name">
                            <p>{v.name}</p>
                            <i>by&nbsp;&nbsp;{v.name}</i>
                            <i style={{marginTop:"5px"}}>{v.lastProgramName}</i>
                        </div>
                        <span className="iconfont icon-sandian" style={{fontSize:"16px",color:"gray"}}></span>
                    </div>
                </div>
                    )):<div className="none-record">暂无订阅</div>
                }
            </div>
            
           
        </div>
    )
}
componentDidMount(){
    // console.log(this.props.location.state.myRadioInfo)
}
}
export default RadioStation