import React,{Fragment} from 'react';
import '../../../assets/css/discover/daysongs.css';
import {
    connect
} from 'react-redux';
class DaySongs extends React.Component{
    render(){
        return(
            <>
                <header>
                    <div className={"poster"} style={{background:"red"}} ref={"daysongpic"} >
                        <div className={"backques"}>
                        <i onClick={()=>{this.props.history.push("/discover")}} className={"iconfont icon-flow "}></i>
                        <i className={"iconfont icon-yiwen "}></i>
                        </div>
                        <div className={"daydate"}>
                             <p  style={{fontSize:"30px",color:"#fff"}}>{this.$tools.daymonth(Date.now())}</p>  
                             <div className={"pushday"}>历史日推 <i className={"iconfont icon-vip "}></i> </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className={"playallsongs"}>
                        <div>
                            <ul>
                                <li> <div className={"allleft"}><i className={"iconfont icon-bofang1 "}></i> 播放全部</div> </li>
                                <li> <div className={"allright"}><i className={"iconfont icon-juxing "}></i> 多选</div> </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"playdaysongs"}>
                        <ul>
                            {this.props.daysongsList.length>0?this.props.daysongsList.map(v=>(
                                  <Fragment key={v.id}>
                                      <li>
                                          <div onClick={
                                              
                                               this.props.singsongs.bind(this,v.id,v)
                                              }>
                                              <img src={v.album.picUrl} alt=""/>
                                              
                                              </div>
                                          <div style={{marginLeft:"10px"}}>
                                              <p style={{marginBottom:"15px"}}>{v.name}</p> 
                                            {v.artists.map(a=>(
                                                <Fragment key={a.id}>
                                                    <i>{a.name+" "}</i>
                                               </Fragment>  
                                            ))}{'-'+v.name} 
                                          </div>
                                          <div>
                                          <i  className={"iconfont icon-shipin "}></i>
                                          <i  className={"iconfont icon-sandian "}></i>
                                          </div>
                                      </li>
                                  </Fragment>  
                                )):<div style={{fontSize:"40px"}}>加载中······</div>
                            }
                        </ul>
                    </div>
                </section>
            </>
        )
    }
 
     
    
    componentDidUpdate(){
        // document.querySelector(".poster").style.background=this.refs.daysongpic?this.props.daysongsList[0].album.blurPicUrl:null
        // console.log(this.props.daysongsList[0].album.blurPicUrl)
    }
    componentDidMount(){
        this.props.getDaySongs.call(this)
    }
}
function mapStateToProps(state){
    // console.log(state.discover,"123")
    return{
        daysongsList:state.discover.daysongs.length>0?state.discover.daysongs:[],
        singsongsList:state.discover.singsongs
    }
}
function mapDispatchToProps(dispatch){
    return{
        getDaySongs(){
            dispatch(()=>{

                    this.$axios.get("/recommend/songs").then(({data})=>{
                        // console.log(data,"sognsongsong")
                        dispatch({
                            type:"DAY_SONGS",
                            payload:{
                                daysongs:data.recommend
                            }
                        })
                       
                    })
   
               
            })
        },
        singsongs(id,vdata){
            // console.log(id)
            this.$axios.get("/song/url",{
                params:{
                    id
                }
            }).then(({data})=>{
                
            //    console.log(data,"正确")
               data.data.map(v=>{
                   console.log(v.url)
                // this.props.history.push("/singsong/"+v.url)
                this.props.history.push({pathname:"singsong",state:{id:v.url,vdata}})
               })
                dispatch({
                    type:"SING_SONGS",
                    payload:{
                        singsongs:data.data
                    }
                })
            })
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DaySongs)