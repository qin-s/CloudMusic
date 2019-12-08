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
    if(type === action.daysongs){
        // console.log(payload,"red")
        state.daysongs = payload.daysongs
    }
    if(type === action.getsongsheet){
        state.changesongsheet = payload.changesongsheet
    }
    if(type === action.pushsheet){
     
        state.pushsheet = payload.pushsheet
    }
    if(type === action.singsongs){
        state.singsongs = payload.singsongs
    }
    return state
}