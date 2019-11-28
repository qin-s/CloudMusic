import React from "react"
import {connect} from "react-redux";
class VideoNew extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.videoNew.map(v=>(
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
        this.props.getNew.call(this)
    }
}
function mapStateToProps(state) {
    return {
        videoNew:state.video.videoNew,
    }
}
function mapDispatchToProps(dispatch){
    return {
        getNew(){
            dispatch(()=>{
                this.$axios.get("/mv/first",{
                    params:{
                        limit:10
                    }
                }).then(({data})=>{
                    dispatch({
                        type:"UP_NEW_LIST",
                        payload:{
                            videoNew:data.data
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoNew)