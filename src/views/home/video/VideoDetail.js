import React from 'react';

import {connect} from "react-redux";
class VideoDetail extends React.Component{
    render(){
        let {name,playCount,desc,publishTime,likeCount,subCount,commentCount,shareCount,artistName} = this.props.videoDetail
        return (
            <div className="videoDetail">
                
                {
                    <video  style={{height:"230px",
                                    width:"100%",
                                    preload:"none",
                                    outline:"none"}}
                                    src={this.props.videoUrl.url?
                                        this.props.videoUrl.url : null}
                                    controls autoPlay></video>
                }
                <div className="videoDetail-content">
                    <div className="videoDetail-head">
                        <h3>{name}</h3><span className="iconfont icon-xiasanjiaoxing"></span>
                    </div>
                    <div className="videoDetail-playCount">{this.props.videoDetail.playCount}观看</div>
                    <div className="videoDetail-opration">
                        <li><i className="iconfont icon-zan"></i>{likeCount}</li>
                        <li><i className="iconfont icon-tianjiawenjian-"></i>{subCount}</li>
                        <li><i className="iconfont icon-pinglunpt"></i>{commentCount}</li>
                        <li><i className="iconfont icon-fenxiangpt"></i>{shareCount}</li>
                    </div>
                </div>
                <div className="videoDetail-artist">
                    <img src="" /> <span>{artistName}</span> <i>+ 收藏</i>
                </div>
                
                <div className="videoDetail-relevant">
                    {
                        this.props.relevantVideo.map((v,i)=>(
                        <div key={i} className="videoDetail-video">
                            <div className="videoDetail-videoLeft">
                                <span>{v.playTime}</span>
                                <img src={v.coverUrl} alt="" />
                            </div>
                            <div className="videoDetail-videoRight">
                                <p>{v.title}</p>
                                <p>
                                    <span>{Math.floor(Math.floor(v.durationms/1000)/60)}:{Math.floor(v.durationms/1000)%60}</span>
                                    <span>{v.creator.map((x,index)=>(
                                        <i key={index}>{x.userName}</i>
                                    ))}</span>
                                </p>
                            </div>
                        </div> 
                        ))
                    }
                </div>                
                <div className="videoDetail-comment">
                    <div className="videoDetail-goodComment">
                        <h3>精彩评论</h3>
                         {
                        this.props.detailHotComment.map(v=>(
                            <div className={"videoDetail-commentUser"} key={v.commentId}>
                                <div><img src={v.user.avatarUrl} alt="" style={{
                                    height:"30px",
                                    width:"30px",
                                    borderRadius:"15px"
                                }} /><span style={{lineHeight:"30px"}}>{v.user.nickname}</span><i className="iconfont icon-dianzan"></i></div>
                                <div>{v.content}</div>
                            </div>
                        ))
                        }
                    <div className="videoDetail-newComment">
                        <h3 style={{background:"red"}}>最新评论</h3>
                        {
                        this.props.detailAllComent.map(v=>(
                            <div className={"videoDetail-commentUser"} key={v.commentId}>
                                <div><img src={v.user.avatarUrl} alt="" style={{
                                    height:"30px",
                                    width:"30px",
                                    borderRadius:"15px"
                                }} /><span style={{lineHeight:"30px"}}>{v.user.nickname}</span><i className="iconfont icon-dianzan"></i></div>
                                <div>{v.content}</div>
                            </div>
                        ))
                        }
                    </div>
                    </div>
                   
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getVideoUrlById.call(this,this.props.match.params.id)
        this.props.getVideoDetail.call(this,this.props.match.params.id)
        this.props.getVideoRelevantList.call(this,this.props.match.params.id)
        this.props.getVideoCommentList.call(this,this.props.match.params.id)
    }
 }
function mapStateToProps(state){
     return {
        videoUrl:state.video.videoUrl,
        videoDetail:state.video.videoDetail,
        relevantVideo:state.video.relevantVideo,
        detailHotComment:state.video.detailHotComment,
        detailAllComent:state.video.detailAllComent
     }
}
function mapDispatchToProps(dispatch){
     return {
        getVideoUrlById(id){
            dispatch(()=>{
                this.$axios.get("/mv/url",{
                    params:{
                        id
                    }
                }).then(({data})=>{
                    dispatch({
                        type:"GET_VIDEO_URL",
                        payload:{
                            videoUrl:data.data
                        }
                    })
                })
            })
        },
        getVideoDetail(id){
            dispatch(()=>{
                this.$axios.get("/mv/detail",{
                    params:{
                        mvid:id
                    }
                }).then(({data})=>{
                    console.log(data.data)
                    dispatch({
                        type:"UP_VIDEO_DETAIL",
                        payload:{
                            videoDetail:data.data
                        }
                    })
                })
            })
        },
        getVideoRelevantList(id){
            dispatch(async ()=>{
                const {data} = await this.$axios.get("/related/allvideo",{
                    params:{
                        id
                    }
                })
                console.log(data)
                dispatch({
                    type:"UP_RELEVANT_VIDEO_LIST",
                    payload:{
                        relevantVideo : data.data
                    }
                })
            })
        },
        getVideoCommentList(id){
            dispatch(()=>{
                 this.$axios.get("/comment/mv",{
                    params:{
                        id
                    }
                }).then(({data})=>{
                    console.log(data)
                    dispatch({
                        type:"UP_DETAIL_COMMENTS_LIST",
                        payload:{
                            detailHotComment :data.hotComments,
                            detailAllComent  :data.comments
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoDetail)

