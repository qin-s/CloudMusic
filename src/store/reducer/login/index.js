import stateInit from "../../state/login"
export default (state = stateInit,{type,payload})=>{
    if(type==="UPLOAD"){
        state.id = localStorage.uid= payload.id
        state.username = localStorage.username = payload.username
        console.log(payload.id,9999,payload.username)
    }
    return state
}