import React from "react";
import "../../assents/css/my.css"
export default class My extends React.Component{
    render(){
        return (
            <div className={"my-header"}>
                <span className={"iconfont icon-sanheng"}></span>
                <p>我的音乐</p>
                <span className={"iconfont icon-juxing"}></span>
            </div>
        )
    }
}