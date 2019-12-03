import stateInit from "../../state/yuncun/index"
export default function yuncun (state = stateInit,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === "GET_HOTWALL"){
        state.hotwall = payload.hotwall
    }
    return state
}