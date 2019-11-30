import myStateInit from "../../state/my"
import myActionType from "../../actionType/my"
export default function (state=myStateInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === myActionType.songList){
        if(payload.songList){
            state.songList = payload.songList
        }
    }
    if(type === myActionType.collectAlbum){
        if(payload.collectAlbum){
            state.collectAlbum = payload.collectAlbum
        }
    }
    if(type === myActionType.collectSinger){
        if(payload.collectSinger){
            state.collectSinger = payload.collectSinger
        }
    }
    if(type === myActionType.collectMV){
        if(payload.collectMV){
            state.collectMV = payload.collectMV
        }
    }
    return state
}