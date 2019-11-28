import initState from "../../state/account";
import actionType from "../../actionType/account";
export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === actionType.GET_USER_INFO){
        state.userInfo = payload.userInfo;
    }
    return state;
}