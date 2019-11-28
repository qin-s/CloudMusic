import React from "react"
import {connect} from "react-redux";
class VideoRecommend extends React.Component{
    render(){
        return (
            <div style={{
                marginTop:"50px"
            }}>
                <h2>推荐MV</h2>
                {

                    this.props.recommendVideo.map(v=>(
                        <div key={v.id}>
                            <h3 >{v.name}</h3>
                            <img style={{
                                width:"300px",
                                height:"200px"
                            }} onClick={()=>this.props.history.push("/videoDetail/"+v.id)} src={v.picUrl} />
                        </div>
                    ))
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getRecommend.call(this)
        console.log(this.props)
    }
}
function mapStateToProps(state) {
    return {
        recommendVideo:state.video.recommendVideo
    }
}
function mapDispatchToProps(dispatch){
    return {
        getRecommend(){
            dispatch(()=>{
                this.$axios.get("/personalized/mv").then(({data})=>{
                    console.log(data)
                    dispatch({
                        type:"UP_RECOMMEND_LIST",
                        payload:{
                            recommendVideo:data.result
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoRecommend)