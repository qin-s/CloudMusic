import React from "react"
import axios from "axios"
export default class Dong extends React.Component{
    render(){
        return(
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        axios.get("/comment/hotwall/list")
        .then(({data})=>{
            console.log(data)
            this.setState({
                data:data.data
            })
            
        })
        
    }
}