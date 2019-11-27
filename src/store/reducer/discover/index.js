import stateBanner from '../../state/discover/'
import action from '../../actionType/discover'
export default function banner(state=stateBanner,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === action.bannerType){
        state.banner = payload
    }
    return state
}