import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import accountCreator from "../../../store/actionCreater/account";

class PrivateLetter extends React.Component {
    render() {
        return (
            <div>
                私信
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        // userInfo:state.account.userInfo,
        // userRegisterInfo:state.account.userRegisterInfo,
    }
}
export default connect(mapStateToProps, dispatch => bindActionCreators(accountCreator, dispatch))(PrivateLetter);
