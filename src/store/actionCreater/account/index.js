export const upResult = (payload) => {
    return {
        type:"GET_USER_INFO",
        payload
    }
};
export default {
    getUserInfo(id){
        return (dispatch)=>{
            this.$axios.get("/user/detail",{
                params:{
                    id
                }
            }).then(data=>{
                console.log(data);
            })
        }
    }
}