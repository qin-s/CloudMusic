import myActionType from "../../actionType/my"
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
    //获取最近播放歌曲列表
    getSongList(){
        return async (dispatch) => {
          const {data} = await this.$axios.get("/user/playlist",{
                params:{
                    uid:localStorage.id || ""
                }
            })
            dispatch(upSongList(data.playlist))
        }
    },
    //获取收藏的专辑
    getCollectAlbum(){
        return async (dispatch) => {
            const {data} = await this.$axios.get("/album/sublist",{
                params:{
                    limit:25
                }
            })
            // console.log(data)
            dispatch(upCollectAlbum(data));
        }
    },
    //获取收藏的歌手
    getCollectSinger(){
        return async (dispatch) => {
            const {data} = await this.$axios.get("/artist/sublist");
            // console.log(data);
            dispatch(upCollectSinger(data))
        }
    },
    //收藏的M视频;
    getCollectMV(){
        return async (dispatch) => {
            const {data} = await this.$axios.get("/mv/sublist");
            console.log(data);
            dispatch(upCollectMV(data))
        }
    }
}