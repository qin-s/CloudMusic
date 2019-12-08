import React,{Fragment} from "react";
import {connect} from "react-redux"
import '../../../assets/css/discover/pushsheet.scss'
 class PushSheet extends React.Component{
    render(){
        return(
            <div className={"allpush"}>
                 <header>
                    <div className={"pushsheet"}>
                        <div>
                        <i onClick={()=>{this.props.history.push("/discover")}} className={"iconfont icon-flow "}></i>
                        <p>歌单</p>
                        </div>
                        <div>
                        <i className={"iconfont icon-sousuo right"}></i>
                        <i  className={"iconfont icon-sandian "}></i>
                        </div>
                    </div>
                    <div >
                        <div>
                             {
                                 this.props.pushsheetList.length>0?this.props.pushsheetList.map((v,i)=>(
                                    <Fragment key={i}>
                                        <div className={"anysongs"}>
                                            <img src={v.coverImgUrl} alt=""/>
                                            <div>
                                                <p>{v.name} </p>
                                                <p> <img src={v.creator.avatarUrl} alt=""/> {v.creator.nickname} &gt; </p>
                                                <p>{v.description}</p>
                                            </div>
                                            <div className={"backsong"}> 
                                                <img src= {v.creator.backgroundUrl} alt=""/>
                                            </div>
                                            
                                        </div>
                                        <div className={"songsheetdetail"}>
                                                <ul>
                                                    <li> <i className={"iconfont icon-pinglunpt"}></i> <p>{v.commentCount}</p> </li>
                                                    <li> <i className={"iconfont icon-fenxiangpt"}></i> <p>{v.shareCount}</p> </li>
                                                    <li> <i className={"iconfont icon-xiazai"}></i> <p>下载</p> </li>
                                                    <li> <i className={"iconfont icon-checkbox"}></i> <p>多选</p> </li>
                                                
                                                </ul>
                                            </div>
                                            
                <section>
                    <div>
                    <div className={"playallsongs"}>
                        <div>
                            <ul>
                            <li> <div className={"allleft"}><i className={"iconfont icon-bofang1 "}></i> 播放全部(共{v.tracks.length}首)</div> </li>
                                <li > <div style={{borderRadius:"20px",background:"red",padding:"10px 10px",color:"#fff"}} className={"allright"}><i className={"iconfont icon-jia "}></i> 收藏({this.$tools.playTime(v.subscribedCount).toFixed(1)}万)</div> </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </section>
                <footer>
                <div >
                    {
                        v.tracks.map((b,i)=>(
                            <div key={i} className={"lastsheet"}>
                                <div style={{fontSize:"20px",width:"40px"}}>{i+1}</div>
                                <div>
                                    <div>
                                        <div className={"simple"}>{b.name}</div>
                                        <div>
                                        {
                                          
                                            b.ar.map(a=>(
                                                <i key={a.id}>
                                                    {a.name}
                                                </i> 
                                                
                                            ))
                                           
                                        }{"-"+b.al.name}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                          <i  className={"iconfont icon-shipin "}></i>
                                          <i  className={"iconfont icon-sandian "}></i>
                                    </div>
                                </div>
                            </div>
                        ))        
               
                    }
                    </div>
                </footer>

                                    </Fragment>
                                 )): <div style={{fontSize:"30px"}}>加载中······</div>
                             }
                        </div>
                    </div>
                </header>
                
         
            </div>
        )
    }
    getSheet(){
        // console.log(this.props.title)
    }
    componentDidUpdate(){

    }
    componentDidMount(){
        
        this.props.getDetail.call(this)
        
       
    }
}
function mapStateToProps(state){
    console.log(state.discover,"asdasdasdas")
   
    return{
        pushsheetList:state.discover.pushsheet.length>0?state.discover.pushsheet:[]
    }
    
}
function mapDispatchToProps(dispatch){
    dispatch({
        type:"PUSH_SHEET",
            payload:{
                pushsheet:[]
            }
    })
    return{
     
        getDetail(){
           
            dispatch(()=>{
                this.$axios.get("/playlist/detail",{
                    params:{
                        id:this.props.match.params.id
                        // id:32311
                    }
                }).then(({data})=>{
                    console.log(data.playlist,"22222222222222")
                    const arr=[];
                    arr.push(data.playlist)
                    dispatch({
                        type:"PUSH_SHEET",
                        payload:{
                            pushsheet:arr
                        }
                    })
                })
            })
           
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PushSheet)