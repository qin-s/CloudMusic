import React,{Fragment} from "react";
import "../../assets/css/account/accountCenter.css";
export default class AccountCenter extends React.Component{
    render(){
        return (
            <Fragment>
                <div className={"cm_account_center_fragment"}>
                    <div>
                        <i className="iconfont icon-xiaoxixinfengnews"></i>
                        <p>消息</p>
                    </div>
                    <div>
                        <b className="iconfont icon-gouwuche"></b>
                        <p>商城</p>
                    </div>
                    <div>
                        <i className="iconfont icon-youhuiquan"></i>
                        <p>演出</p>
                    </div>
                    <div>
                        <b className="iconfont icon-shangyi"></b>
                        <p>个性装扮</p>
                    </div>
                </div>
            </Fragment>    
        )
    }
}