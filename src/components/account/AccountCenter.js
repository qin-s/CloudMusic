import React,{Fragment} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import accountCreator from "../../store/actionCreater/account";
import "../../assets/css/account/accountCenter.css";
class AccountCenter extends React.Component{
    render(){
        let userNewsInfo = this.props.userNewsInfo;
        return (
            <Fragment>
                <div className={"cm_account_center_fragment"}>
                    <div>
                        <div className={"cm_account_center_div_news"}>
                            <i className="iconfont icon-xiaoxixinfengnews"></i>
        <div style={{display:userNewsInfo.newMsgCount?"block":"none"}}>{userNewsInfo.newMsgCount}</div>
                        </div>
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
    componentDidMount() {
        if(localStorage.uid)
        this.props.getUserNewsInfo.call(this)
    }
}
export default connect(state=>({userNewsInfo:state.account.userNewsInfo}),dispatch=>bindActionCreators(accountCreator,dispatch))(AccountCenter);