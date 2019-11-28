import React from "react";
import {
    connect
} from "react-redux"
class Allmv extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
    componentDidMount(){
        this.$axios.get("/")
    }
}
