import React from 'react'
import { connect } from 'react-redux'
import '../../assets/css/discover/songdetail.scss'
class SingSong extends React.Component{
    render(){
        return(
            <div className={"backgroundsong"}>
                <div className={"songdetail"}>
                        <i onClick={()=>{this.props.history.push("/daysongs")}} className={"iconfont icon-flow "}></i>
                        <i className={"iconfont icon-fenxiang"}></i> 
                 </div>
               <div className={"startsong"}>
                <a href={this.props.location.state.id}><i className={"iconfont icon-bofang1"}></i></a>
                </div>
            </div>
        )
    }
    componentDidMount(){
     console.log(this.props.location.state.vdata,"12312312312")   
    }
}
function mapStateToProps(state){
    return{

    }
}
export default connect(mapStateToProps)(SingSong)