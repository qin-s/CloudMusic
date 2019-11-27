import React from "react"
class MyCreateCollection extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }
    render(){
        return (
            <div className="create-song-list" style={{display:this.props.isShowTwo?"block":"none"}}>
            <ul>
                {
                    this.state.list.map(v=>(
                         <li key={v.id}>
                            <img src={v.coverImgUrl}  alt="" />
                            <div className="create-song-list-right">
                                <div className="create-song-title">
                                    <span>{v.name}</span>
                                    <p>{v.trackCount}首 by {v.creator.nickname}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
               
                {/* <li>
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
                </li> */}
            </ul>
        </div>
        )
    }
    componentDidMount(){
        this.$axios.get("/user/playlist",{
            params:{
                uid:506866023
            }
        }).then(({data})=>{
            this.setState({
                list:data.playlist
            })
            console.log(data.playlist)
        })
    }
}
export default MyCreateCollection