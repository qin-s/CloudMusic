import myActionType from "../../actionType/my"
export const upUserRecordList = userRecordList => ({
    type:myActionType.userRecordList,
    payload:{
        userRecordList
    }
})
export const upMyRadioInfo = myRadioInfo => ({
    type:myActionType.myRadioInfo,
    payload:{
        myRadioInfo
    }
})
export const upCollectMV = collectMV => ({
    type:myActionType.collectMV,
    payload:{
        collectMV 
    }
})
export const upCollectSinger = collectSinger => ({
    type:myActionType.collectSinger,
    payload:{
        collectSinger 
    }
})
export const upCollectAlbum = collectAlbum => ({
    type:myActionType.collectAlbum,
    payload:{
        collectAlbum
    }
})
export const upSongList = songList => ({
    type:myActionType.songList,
    payload:{
      songList
    }
})

export default  {
    //获取创建的歌单列表
    getSongList(){
        return async (dispatch) => {
            if(localStorage.id){
                const {data} = await this.$axios.get("/user/playlist",{
                params:{
                        uid:localStorage.id || ""
                    }
                })
                // console.log("getSongList",data)
                dispatch(upSongList(data.playlist))
            }
         
        }
    },
    //获取收藏的专辑
    getCollectAlbum(){
        return async (dispatch) => {
            if(localStorage.id){
                 const {data} = await this.$axios.get("/album/sublist",{
                    params:{
                        limit:25
                    }
                })
                // console.log(data)
                dispatch(upCollectAlbum(data));
            }
           
        }
    },
    //获取收藏的歌手
    getCollectSinger(){
        return async (dispatch) => {
            if(localStorage.id){
                 const {data} = await this.$axios.get("/artist/sublist");
            // console.log(data);
                dispatch(upCollectSinger(data))
            }
           
        }
    },
    //收藏的MV视频;
    getCollectMV(){
        return async (dispatch) => {
            if(localStorage.id){
                  const {data} = await this.$axios.get("/mv/sublist");
                console.log(data);
                dispatch(upCollectMV(data))
            }
          
        }
    },
    //我的电台;
    getMyRadioInfo(){
        return async (dispatch) => {
            if(localStorage.id){
                const {data} = await this.$axios.get("/dj/sublist");
                // console.log("我的电台",data.djRadios)
                dispatch(upMyRadioInfo(data.djRadios))
            }
        }
    },
    //最近播放歌曲
    getUserRecordList(){
        return async (dispatch) => {
            if(localStorage.id){
                const {data} = await this.$axios.get("/user/record",{
                    params:{
                        uid:localStorage.id,
                        type:0
                    }
                });
                // console.log("最近播放歌曲",data)
                dispatch(upUserRecordList(data.allData))
            }
        }
    }
}