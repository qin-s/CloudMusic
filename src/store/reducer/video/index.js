import initState from "../../state/video";
export default (state=initState,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state))
    if(type === "UP_LIST"){
        state.vids = payload.vids
    }
    if(type === "UP_RECOMMEND_LIST"){
        state.recommendVideo = payload.recommendVideo
    }
    if(type === "GET_VIDEO_URL"){
        state.videoUrl = payload.videoUrl
    }
    if(type === "UP_VIDEO_DETAIL"){
        state.videoDetail = payload.videoDetail
    }
    if(type === "UP_NEW_LIST"){
        state.videoNew = payload.videoNew
    }
    if(type === "UP_NETEASE_LIST"){
        state.videoNetEase = payload.videoNetEase
    }
    if(type === "UP_LISTENBGM_LIST"){
        state.videoListenbgm = payload.videoListenbgm
    }
    if(type === "UP_SCENE_LIST"){
        state.videoScene = payload.videoScene
    }
    if(type === "UP_ACGMUSIC_LIST"){
        state.videoAcgMusic = payload.videoAcgMusic
    }
    if(type === "UP_COVER_LIST"){
        state.videoCover = payload.videoCover
    }
    if(type === 'UP_DANCE_LIST'){
        state.videoDance = payload.videoDance
    }
    if(type === 'UP_GAME_LIST'){
        state.videoGame = payload.videoGame
    }
    if(type === "UP_MOREEXCITE_LIST"){
        state.moreExciteMv = payload.moreExciteMv
    }
    if(type === "UP_RELEVANT_VIDEO_LIST"){
        state.relevantVideo = payload.relevantVideo
    }
    if(type === "UP_DETAIL_COMMENTS_LIST"){
        state.detailHotComment = payload.detailHotComment
        state.detailAllComent = payload.detailAllComent
    }
    return state
}