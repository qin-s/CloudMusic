import React from "react"
import "../../../assets/css/my/songList.css"
class MySongList extends React.Component{
    constructor(){
        super();
        this.state = {
            songList:{}
        }
    }
    render(){
        return (
            <div className="song-list">
                {/* 歌单列表头部 */}
                <div className="my-song-list-header">
                    <div className="song-list-header">
                        <div className="my-goback">
                            <span className="iconfont icon-flow" onClick={()=>this.props.history.go(-1)}></span>
                            <i>歌单</i>
                        </div>
                        <div className="my-song-search">
                            <span className="iconfont icon-zoom"></span>
                            <span className="iconfont icon-sandian"></span>
                        </div>
                    </div>
                    <div className="my-user-info">
                        <img src={this.state.songList.coverImgUrl} alt="" /> 
                        <div className="my-info-tn">
                            <p>{this.state.songList.name}</p>
                            <div className="my-info-name">
                                <p>
                                    <img src="http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg?param=200y200" alt=""/>
                                </p>
                                <div className="my-name">
                                    文字文字
                                    <span className="iconfont icon-youjiantou"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-song-choose">
                        <ul>
                            <li>
                                <span className="iconfont icon-pinglun"></span>
                                <p>评论</p>
                            </li>
                            <li>
                                <span className="iconfont icon-fenxiang"></span>
                                <p>分享</p>
                            </li>
                            <li>
                                <span className="iconfont icon-xiazai1"></span>
                                <p>下载</p>
                            </li>
                            <li>
                                <span className="iconfont icon-checkbox"></span>
                                <p>多选</p>
                            </li>
                        </ul>
                    </div>
                </div>  
               {/* 歌曲列表 */}
               <div className="my-song-list">
                   <div className="my-song-list-nav">
                       <span className="iconfont icon-bofang1"></span>
                       播放全部
                       <i>（共1首）</i>
                   </div>
                   <ul>
                      {
                          this.state.songList.tracks?this.state.songList.tracks.map((v,i)=>(
                              <li key={v.id}>
                                    <span>{i+1}</span>
                                    <div className="song-info">
                                        <div className="song-name">
                          <p>{v.name}</p>
                                                <div className="song-creator">
                                                    <span>SQ</span>
                                                    <b>周杰伦</b>
                                                </div>
                                        </div>
                                        <div className="song-icon">
                                            <span className="iconfont icon-bofang1"></span>
                                            <span className="iconfont icon-sandian"></span>
                                        </div>
                                    </div>
                                </li>
                          )):null
                      }
                   </ul>
               </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state.id)
        this.$axios.get("/playlist/detail",{
            params:{
                id:this.props.location.state.id
            }
        }).then(({data})=>{
            this.setState({
                songList:data.playlist
            })
            console.log(1111122222,this.state.songList.tracks)
        })
    }
}
export default MySongList