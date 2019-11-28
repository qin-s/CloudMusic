import React from 'react';

import {connect} from "react-redux";
class VideoDetail extends React.Component{
    render(){
        return (
            <div>
                {
                    <h1>{this.props.match.params.id}</h1>
                }
                {
                    <video  style={{height:"270px",
                                    width:"400px",
                                    preload:"none",
                                    outline:"none"}}
                                    src={this.props.videoDetail.url?
                                        this.props.videoDetail.url : null}
                                    controls></video>
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getVideoById.call(this,this.props.match.params.id)
    }
 }
function mapStateToProps(state){
     return {
        videoDetail: state.video.videoDetail
     }
}
function mapDispatchToProps(dispatch){
     return {
        getVideoById(id){
            dispatch(()=>{
                this.$axios.get("/mv/url",{
                    params:{
                        id
                    }
                }).then(({data})=>{
                    dispatch({
                        type:"GET_VIDEO_DETAIL",
                        payload:{
                            videoDetail:data.data
                        }
                    })
                })
            })
        }
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoDetail)

