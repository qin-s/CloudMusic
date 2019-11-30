import React,{Fragment} from 'react'
import '../../../assets/css/discover/daysongs.css'
import {
    connect
} from 'react-redux'
class DaySongs extends React.Component{
    render(){
        return(
            <>
                <header>
                    <div className={"poster"}>
                        <div className={"backques"}>
                        <div style={{color:"#fff",fontSize:"20px"}}>返回图标：<i onClick={()=>{this.props.history.go(-1)}} className={"iconfont icon-wodediantai "}></i></div>
                        <i className={"iconfont icon-wodediantai "}></i>
                        </div>
                        <div className={"daydate"}>
                             <p  style={{fontSize:"30px",color:"#fff"}}>{this.$tools.daymonth(Date.now())}</p>  
                             <div className={"pushday"}>历史日推 <i className={"iconfont icon-wodediantai "}></i> </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className={"playallsongs"}>
                        <div>
                            <ul>
                                <li> <div className={"allleft"}><i className={"iconfont icon-wodediantai "}></i> 播放全部</div> </li>
                                <li> <div className={"allright"}><i className={"iconfont icon-wodediantai "}></i> 多选</div> </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"playdaysongs"}>
                        <ul>
                            {
                                this.props.daysongsList.map(v=>(
                                  <Fragment key={v.id}>
                                      <li>
                                          <div><img src={v.album.picUrl} alt=""/></div>
                                          <div style={{marginLeft:"10px"}}>
                                              <p style={{marginBottom:"15px"}}>{v.name}</p> 
                                            {v.artists.map(a=>(
                                                <Fragment key={a.id}>
                                                    <i>{a.name+" "}</i>
                                               </Fragment>  
                                            ))}{'-'+v.name} 
                                          </div>
                                          <div>
                                          <i  className={"iconfont icon-wodediantai "}></i>
                                          <i  className={"iconfont icon-wodediantai "}></i>
                                          </div>
                                      </li>
                                  </Fragment>  
                                ))
                            }
                        </ul>
                    </div>
                </section>
            </>
        )
    }
    componentDidMount(){
        this.props.getDaySongs.call(this)
    }
}
function mapStateToProps(state){
    console.log(state.discover.daysongs)
    return{
        daysongsList:state.discover.daysongs
    }
}
function mapDispatchToProps(dispatch){
    return{
        getDaySongs(){
            dispatch(()=>{
                this.$axios.get("/recommend/songs").then(({data})=>{
                    dispatch({
                        type:"DAY_SONGS",
                        payload:{
                            daysongs:data.recommend
                        }
                    })
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DaySongs)