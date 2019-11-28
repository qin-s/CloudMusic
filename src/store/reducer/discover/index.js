import stateBanner from '../../state/discover/'
import action from '../../actionType/discover'
import { bindActionCreators } from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
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
    return state
}