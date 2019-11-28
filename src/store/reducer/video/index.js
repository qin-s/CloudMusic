import initState from "../../state/video";
export default (state=initState,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state))
    if(type === "UP_LIST"){
        state.vids = payload.vids
    }
    if(type === "UP_RECOMMEND_LIST"){
        state.recommendVideo = payload.recommendVideo
    }
    if(type === "GET_VIDEO_DETAIL"){
        state.videoDetail = payload.videoDetail
    }
    return state
}