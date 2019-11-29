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
                         <li key={v.id} onClick={()=>this.props.history.push({pathname:"/songlist",state:{"id":v.id}})}>
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
            </ul>
        </div>
        )
    }
    componentDidMount(){
        // console.log(this.props);
        this.$axios.get("/user/playlist",{
            params:{
                uid:506866023
            }
        }).then(({data})=>{
            this.setState({
                list:data.playlist
            })
            // console.log("Collection:",data.playlist)
        })
    }
}
export default MyCreateCollection