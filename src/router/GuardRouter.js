import React from "react";
import {
    withRouter
} from "react-router-dom"
class GuardRouter extends React.Component{
    render(){
        return (
            <this.props.component></this.props.component>
        )
    }
    componentWillMount(){
        // if(this.props.location.pathname==="/my"){
        //     if(!localStorage.userName)
        //         this.props.history.push({
        //             pathname:"/login",
        //             state:{
        //                 goUrl:this.props.location.pathname
        //             }
        //         })
        // }
    }
}
export default withRouter(GuardRouter);