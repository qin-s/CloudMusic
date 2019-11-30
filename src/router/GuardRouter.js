import React from "react";
import {
    withRouter
} from "react-router-dom"
class GuardRouter extends React.Component{
    render(){
        return (
            <this.props.component {...this.props}></this.props.component>
        )
    }
}
export default withRouter(GuardRouter);