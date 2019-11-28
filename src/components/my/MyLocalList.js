import React from "react"
class MyLocalList extends React.Component{
    render(){
        return (
            <div className="my-list">
            <ul>
                <li>
                    <span className="iconfont icon-ttpodicon"></span>
                    <div className="local-music">
                        <p>本地音乐</p>
                        <div className="list-icon-right">
                            <i>0</i>
                            <b className="iconfont icon-right-arrow"></b>
                        </div>
                    </div>
                </li>
                <li>
                    <span className="iconfont icon-zuijinbofang"></span>
                    <div className="local-music">
                        <p>最近播放</p>
                        <div className="list-icon-right">
                            <i>0</i>
                            <b className="iconfont icon-right-arrow"></b>
                        </div>
                    </div>
                </li>
                <li>
                    <span className="iconfont icon-wodediantai"></span>
                    <div className="local-music">
                        <p>我的电台</p>
                        <div className="list-icon-right">
                            <i>0</i>
                            <b className="iconfont icon-right-arrow"></b>
                        </div>
                    </div>
                </li>
                <li>
                    <span className="iconfont icon-wodeshoucang"></span>
                    <div className="local-music collection">
                        <p>我的收藏</p>
                        <div className="list-icon-right">
                            <i>专辑/歌手/视频/专栏/Mlog</i>
                            <b className="iconfont icon-right-arrow"></b>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        )
    }
    componentDidMount(){
       this.$axios.get("/artist/sublist").then(({data})=>{
        //   console.log(data);
       });
       
    }
}
export default MyLocalList