import stateInit from "../../state/login"
export default (state = stateInit,{type,payload})=>{
    if(type==="UPLOAD"){
        state.id = payload.id
        console.log(payload.id,9999)
    }

    return state
}