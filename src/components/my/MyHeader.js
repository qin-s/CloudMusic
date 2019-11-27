import React from "react"
class MyHeader extends React.Component{
    render(){
        return (
            <div className={"my-header"}>
                <span className={"iconfont icon-cloud"}></span>
                <p>我的音乐</p>
                <span className={"iconfont icon-iconfontplay"}></span>
            </div>
        )
    }
}
export default MyHeader