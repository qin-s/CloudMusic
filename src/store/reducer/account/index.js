import initState from "../../state/account";
import actionType from "../../actionType/account";
export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === actionType.GET_USER_INFO){
        state.userInfo = payload.userInfo;
    }
    if(type === actionType.GET_USER_NEWS_INFO){
        state.userNewsInfo = payload.userNewsInfo;
    }
    if(type === actionType.GET_USER_REGISTER_INFO){
        state.userRegisterInfo = payload.userRegisterInfo;
    }

    return state;
};
