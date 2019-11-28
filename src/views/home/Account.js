// import "../../assets/css/account.css";
import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import accountCreator,{upResult} from "../../store/actionCreater/account"
class Account extends React.Component{
    render(){
        return (
            <div>
                <p className="cm_header_top">
                    <b className="iconfont icon-saoyisao"></b>
                    <b className="iconfont icon-play-copy"></b>
                </p>
                <div className={"cm_header_bottom"}>
                    <img src="" alt=""/>
                    <div>中</div>
                    <div>右</div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getUserInfo.call(this);
    }
}
function mapStateToProps(state){
    return {
        id:state.account.id,
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(accountCreator,dispatch))(Account);