import axios from "axios";
export const upGetUserInfo = (userInfo) =>{
    return {
        type:"GET_USER_INFO",
        payload:{
            userInfo
        }
    }
};

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
    }
}