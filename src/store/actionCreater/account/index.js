import axios from "axios";
export const upGetUserInfo = (userInfo) =>{
    return {
        type:"GET_USER_INFO",
        payload:{
            userInfo
        }
    }
};
export const upGetUserNewsInfo = (userNewsInfo) =>{
    return {
        type:"GET_USER_NEWS_INFO",
        payload:{
            userNewsInfo
        }
    }
};
export const upGetUserRegisterInfo = (userRegisterInfo) =>{
    return {
        type:"GET_USER_REGISTER_INFO",
        payload:{
            userRegisterInfo
        }
    }
}
export default{
    getUserInfo(){
        return (dispatch)=>{
            axios.get("/user/detail",{
                params:{
                    uid:localStorage.uid
                }
            }).then(({data})=>{
                dispatch(upGetUserInfo(data.profile))
            });
        }
    },
    getUserNewsInfo(){
        return (dispatch)=>{
            axios.get("/msg/private",{
                params:{
                    time:Date.now()
                }
            }).then(({data})=>{
                dispatch(upGetUserNewsInfo(data))
            })
        }
    },
    getUserRegisterInfo(){
        return (dispatch)=>{
            axios.get("/m/isRegister",{
                params:{
                    uid:localStorage.uid
                }
            }).then(({data})=>{
                dispatch(upGetUserRegisterInfo(data))
            })
        }
    },
    changeUserRegisterInfo(){
        return (dispatch)=>{
            axios.get("/m/register",{
                params:{
                    uid:localStorage.uid
                }
            }).then(({data})=>{
                dispatch(upGetUserRegisterInfo(data))
            })
        }
    }
}
