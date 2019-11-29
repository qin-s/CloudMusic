import stateBanner from '../../state/discover/'
import action from '../../actionType/discover'
export default function banner(state=stateBanner,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === action.bannerType){
        state.banner = payload.banner;
    }
    if(type === action.rdSongs){
        // console.log(payload)
        state.rdSongs = payload.rdsongs
    }
    if(type === action.newdish){
        // console.log(payload.newdish,"dis")
        state.newdish = payload.newdish
    }
    if(type === action.esscloud){
        // console.log(payload)
        state.esscloud = payload.esscloud
    }
    return state
}