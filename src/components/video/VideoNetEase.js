import React from "react"
import {connect} from "react-redux";
class VideoNetEase extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.videoNetEase.map(v=>(
                        <div key = {v.id}>
                            <h3 >{v.name}</h3>
                            <img style={{
                                width:"300px",
                                height:"200px"
                            }} alt={""} onClick={()=>this.props.history.push("/videoDetail/"+v.id)} src={v.cover} />
                        </div>
                    ))
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getNetEase.call(this)
    }
}
function mapStateToProps(state) {
    return {
        videoNetEase:state.video.videoNetEase
    }
}
function mapDispatchToProps(dispatch){
    return {
        getNetEase(){
            dispatch(()=>{
                this.$axios.get("/mv/exclusive/rcmd",{
                    params:{
                        limit:10
                    }
                }).then(({data})=>{
                    console.log(data.data)
                    dispatch({
                        type:"UP_NETEASE_LIST",
                        payload:{
                            videoNetEase:data.data
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoNetEase)