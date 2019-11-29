import React from "react"
class MyCreatelove extends React.Component{
    render(){
        return (
        <div className="create-song-list" style={{display:this.props.isShow?"block":"none",paddingBottom:"40px"}}>
            <ul>
                {
                    this.props.songList.map(v=>(
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
}
export default MyCreatelove