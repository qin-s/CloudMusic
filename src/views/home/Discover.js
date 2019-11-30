import React ,{Fragment} from 'react';
import "../../assets/css/discover/discover.css"
import swiper from '../../components/discover/swiper'
import {
    connect,
} from "react-redux"
 class Discover extends React.Component{
    constructor(){
        super();
        this.state = {
            banner:[]
        }
    }
    render(){
        return (
            <>      
                <div className={"nav"}>
                    <div className={"ull"}>
                        <div><i className={"iconfont icon-wodediantai left"}></i></div>
                      <div className={"mid"}> <a className={"adisco"} href={"http://www.baidu.com"}> <i className={"iconfont icon-zoom midd"}>
                          <b className="nan">我太难了</b>  
                            </i></a> </div>
                        <div> <i className={"iconfont icon-wodediantai right"}></i>  </div>
                    </div>    
                </div>  

                <article>
                    {
                        <div className="swiper-container">
                        <div className="swiper-wrapper ">
                       {
                            this.props.bannerList.map(v=>(
                                    <div className={"swiper-slide banner "} key={v.bannerId}>
                                            <img src={'http://47.97.197.144:3005/img?url='+v.pic} alt=""/>
                                            <p style={{background:v.titleColor}} className={"rightdown"}>{v.typeTitle}</p>
                                    </div>      
                                ))    
                        }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    }
                  
                </article>
                
                <aside>
                    <div className={"day"}>
                        <ul>
                            <li onClick={()=>{this.props.history.push("/daysongs")}}><i className={"iconfont icon-wodediantai "}></i> <p>每日推荐</p> </li>
                            <li><i className={"iconfont icon-wodediantai "}></i> <p>歌单</p> </li>
                            <li><i className={"iconfont icon-wodediantai "}></i> <p>排行榜</p> </li>
                            <li><i className={"iconfont icon-wodediantai "}></i> <p>电台</p> </li>
                            <li><i className={"iconfont icon-wodediantai "}></i> <p>直播</p> </li>
                        </ul>
                    </div>
                </aside>
                 <p className={"long"}></p>
                <div className={"songs"}>
                    <div>推荐歌单</div>
                    <div> <p className={"pleft"}> 为你精挑细选 </p> <p className={"pright"}> 歌单广场 </p>
                    </div>
                    <div className={"songList"}>
                        <ul>
                            {
                                this.props.rdsonglist.map(v=>(
                                    <Fragment key={v.id}>
                                        <li>
                                            <img src={'http://47.97.197.144:3005/img?url='+v.picUrl} alt=""/>
                                            <p>{v.name}</p>
                                            <div className={"playcount"}>
                                            <i className={"iconfont icon-wodediantai "}></i>
                                            <i>{String(v.playCount).substr(0,String(v.playCount).length-4)+"万"}</i>
                                            </div>
                                        </li>
                                    </Fragment> 
                                   
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
                
                <div style={{marginTop:"40px"}} className={"songs"}>
                    <div></div>
                    <div> <p className={"pleft"}> 新碟 <i style={{fontSize:"10px",marginLeft:"5px",color:"#666",opacity:"0.7"}}>新歌</i> </p> <p className={"pright"}> 更多新碟 </p>
                    </div>
                    <div className={"songList"}>
                        <ul>
                            {
                                this.props.newdishList.map(v=>(
                                    <Fragment key={v.id}>
                                        <li>
                                            <img src={'http://47.97.197.144:3005/img?url='+v.picUrl} alt=""/>
                                            <p>{v.name}</p>
                                        </li>
                                    </Fragment> 
                                   
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>

                <div className={"esscloud"}>
                    <div className={'essdiv'}></div>
                    <div className={"cloudcontent"}>
                            <p>云村精选</p>
                            <div> <i className={"iconfont icon-wodediantai "}></i>获取新内容</div>
                    </div>
                    <div className={"essborder"}></div>
                    {
                        this.props.esscloudList.map(v=>(
                           <div className={"cloudpic"} key={v.id}>
                        <div className={"cloudmsg"}> {JSON.parse(v.json).msg} </div> 

                        

                        {JSON.parse(v.json).event?JSON.parse(v.json).event.pics.map(a=>(  <Fragment key={Date.now()}><img style={{height:"300px"}} src={a.originUrl} alt="" /></Fragment> )):null}
                              { JSON.parse(v.json).video?<img src={JSON.parse(v.json).video.coverUrl } alt=""></img> :null   } 

                               {v.pics.map((v)=>(
                                    <Fragment key={v.originUrl}>
                                        <img  src={v.originUrl} alt=""/>
                                    </Fragment>
                               ))}
                            
                                <div className={"goodshare"}>
                                    <ul>
                                    <img style={{width:"20px",height:"20px",borderRadius:"10px",marginLeft:"100px",marginTop:"-1px"}} src={v.user.avatarUrl} alt=""/>
                                        <li> <i className={"iconfont icon-wodediantai "}></i> {v.insiteForwardCount} </li>
                                        <li><i className={"iconfont icon-wodediantai "}></i> {v.info.commentCount} </li>
                                        <li><i className={"iconfont icon-wodediantai "}></i> {v.info.likedCount} </li>
                                    </ul>
                                </div>
                               <div className={"cloudsolid"}></div>
                           </div>
                        ))
                    }
                </div>


                <footer>
                    <div style={{marginTop:"400px"}}></div>
                </footer>
            </>
        )
    }
    componentDidUpdate(){
        // console.log(this.props.esscloudList,123123123)
    }
    componentDidMount(){
        this.props.getBanner.call(this) 
        this.props.getRdSongs.call(this) 
        this.props.getNewsDish.call(this) 
        this.props.getEssCloud.call(this) 
     
    }
}
function mapStateToProps(state){
    // var str = 123123
    // console.log((String(str)).substr(0,(String(str)).length - 4),123123)
    // console.log(state.discover.newdish,"dish")
    // console.log(state,123)
    return{
        bannerList:state.discover.banner,
        rdsonglist:state.discover.rdSongs,
        newdishList:state.discover.newdish,
        esscloudList:state.discover.esscloud,
    }
}

function mapDispatchToProps(dispatch){
    return{

        getBanner(){
            dispatch(()=>{
                this.$axios.get("/banner",{
                    params:{
                        type:1
                    }
                }).then(({data})=>{
                    // console.log(data,"banner")
                    dispatch({
                        type:"GET_BANNER",
                        payload:{
                            banner:data.banners,
                        }
                    })
                    swiper.swiper()
                    
                })
            })
        },

        //推荐歌单
        getRdSongs(){
            dispatch(()=>{
                this.$axios.get("/personalized",{
                    params:{
                        limit:6
                    }
                }).then(({data})=>{
                    // console.log(data.result,"songs")
                    dispatch({
                        type:"GET_SONGS",
                        payload:{
                            rdsongs:data.result,
                        }
                    })
                    
                })
            })
        },
            //83678773 /album  根据ID查询详细列表
            ///top/album  更多碟片里的本周新碟
        getNewsDish(){
            dispatch(()=>{
                this.$axios.get("/top/album",{
                    params:{
                        limit:3
                    }
                }).then(({data})=>{
                    
                    dispatch({
                        type:"GET_NEW_DISH",
                        payload:{
                            newdish:data.albums
                        }
                    })
                    
                })
            })
        },
        //userId id:506866023
        // /video/group/list //id: 59115  获取视频标签列表  id:58112   id:75100   宝宝:id:75100  
        // /video/group?id=9104  //视频标签下的视频
        // /related/allvideo id=""  相关视频
        
        // info中  commentCount: 91  评论数量     likedCount: 113 点赞数量  insiteForwardCount:7转发
        getEssCloud(){
            dispatch(()=>{
                this.$axios.get("/event",{
                    params:{
                        pagesize:20,
                        lasttime:-1
                    }
                }).then(({data})=>{
                    
                    dispatch({
                        type:"GET_ESS_CLOUD",
                        payload:{
                            esscloud:data.event
                        }
                    })
                    
                })
            })
        },
     

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Discover)
//top/playlist  //歌单分类 ：歌单(网友精选碟)歌单广场点进去后的页面数据