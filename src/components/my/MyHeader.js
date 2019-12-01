import React from "react"
class MyHeader extends React.Component{
    render(){
        return (
            <div className={"my-header"}>
                <span className={"iconfont icon-cloud"}></span>
                <p style={{fontSize:"20px"}}>我的音乐</p>
                <span className={"iconfont icon-iconfontplay"}></span>
            </div>
        )
    }
}
export default MyHeader