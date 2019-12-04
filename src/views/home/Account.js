import "../../assets/css/account/account.css";
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import accountCreator from "../../store/actionCreater/account";
import AccountCenter from "../../components/account/AccountCenter";
import AccountBottom from "../../components/account/AccountBottom";
class Account extends React.Component {
    render() {
        let userInfo = this.props.userInfo;
        let userRegisterInfo = this.props.userRegisterInfo;
        return (
            <div className={"cm_account"}>
                <div className={"cm_header"}>
                    <p className={"cm_header_top"}>
                        <b className={"iconfont icon-saoyisao"}></b>
                        <b className={"iconfont icon-play-copy"}></b>
                    </p>
                    <div className={"cm_header_input"} style={{display:localStorage.uid?"none":"block"}}>
                        <p>登录网易云音乐</p>
                        <p>手机电脑多端同步，尽享海量高品质音乐</p>
                        <input type="button" value={"立即登录"} onClick={this.login.bind(this)}/>
                    </div>
                    <div className={"cm_header_middle"} style={{display:localStorage.uid?"flex":"none"}}>
                        <img src={userInfo.avatarUrl}  alt=""/>
                        <div className={"cm_header_middle_div"}>
                            <b>{userInfo.nickname}</b>
                            <p className={"cm_header_middle_div_p"}>LV.{userInfo.gender}</p>
                        </div>
                        <div className={"cm_header_middle_div_two"} style={{display:userRegisterInfo.ok===1?"block":"none",backgroundColor:"#F8F8F8",border:"2px solid #E0E1E3",color:"#353537",fontSize:"20px"}}>&nbsp;已签到<b className={"iconfont icon-youjiantou"}></b></div>
                        <div className={"cm_header_middle_div_two"} style={{display:userRegisterInfo.ok===-1?"block":"none"}} onClick={this.register.bind(this)}><b className={"iconfont icon-changyongicon-"}></b> 签到</div>
                        
                    </div>
                    <div className={"cm_header_bottom"} style={{display:localStorage.uid?"flex":"none"}}>
                        <div>
                            <span>{userInfo.djStatus}</span>
                            <p>动态</p>
                        </div>
                        <div>
                            <span>{userInfo.follows}</span>
                            <p>关注</p>
                        </div>
                        <div>
                            <span>{userInfo.followeds}</span>
                            <p>粉丝</p>
                        </div>
                        <div className={"cm_header_bottom_last_div"}>
                            <span className={"iconfont icon-weibiaoti--1"}></span>
                            <p>编辑</p>
                        </div>
                    </div>
                </div>
                <div className={"cm_header_member"}>
                    <div className={"cm_header_member_div"}>
                        <span>开通黑胶VIP</span>
                        <p>新客仅5元<b className={"iconfont icon-right-arrow"}></b></p>
                    </div>
                    <div>
                        <span>会员中心</span>
                        <p>VIP享超12向特权<b className={"iconfont icon-right-arrow"}></b></p>
                    </div>
                </div>
                <AccountCenter></AccountCenter>
                <AccountBottom></AccountBottom>
                <button style={{display:localStorage.uid?"block":"none"}} onClick={this.logout}>退出登录</button>
            </div>
        )
    }
    componentDidMount() {
        if(localStorage.uid)
        this.props.getUserInfo.call(this)
        this.props.getUserRegisterInfo.call(this)
    }
    login(){
        this.props.history.push("/login");
    }
    logout(){
        localStorage.clear();
        window.location.reload();
    }
    register(){
        this.props.changeUserRegisterInfo.call(this);
        window.location.reload();
    }
}
function mapStateToProps(state) {
    return {
        userInfo:state.account.userInfo,
        userRegisterInfo:state.account.userRegisterInfo,
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(accountCreator,dispatch))(Account);
