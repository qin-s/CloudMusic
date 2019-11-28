import React from "react"
class MyCreateLove extends React.Component{
    render(){
        return (
            <div className="create-song-list" style={{display:this.props.isShow?"block":"none"}}>
            <ul>
                <li>
                    <img src={"http://p1.music.126.net/tNZ0APFG0RMiEqVIy81Irg==/109951164503526066.jpg?param=50y50&quality=100"} alt="" />
                    <div className="create-song-list-right">
                        <div className="create-song-title">
                            <span>我喜欢的音乐</span>
                            <p>273首</p>
                        </div>
                        <div className="create-song-heart">
                            <span className="iconfont icon-xinneike"></span>
                            <p>心动模式</p>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={"http://p1.music.126.net/tNZ0APFG0RMiEqVIy81Irg==/109951164503526066.jpg?param=50y50&quality=100"} alt="" />
                    <div className="create-song-list-right">
                        <div className="create-song-title">
                            <span>一村</span>
                            <p>273首</p>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={"http://p1.music.126.net/tNZ0APFG0RMiEqVIy81Irg==/109951164503526066.jpg?param=50y50&quality=100"} alt="" />
                    <div className="create-song-list-right">
                        <div className="create-song-title">
                            <span>明月</span>
                            <p>273首</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        )
    }
    componentDidMount(){
        this.$axios.get("/likelist",{
            params:{
                uid:506866023
            }
        }).then(({data})=>{
            console.log("Like:",data)
        })
    }
}
export default MyCreateLove