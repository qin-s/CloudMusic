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
                            <li><i className={"iconfont icon-wodediantai "}></i> <p>每日推荐</p> </li>
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
                
                <div className={"songs"}>
                    <div></div>
                    <div> <p className={"pleft"}> 新碟  <i style={{fontSize:"10px",marginLeft:"5px",color:"#666",opacity:"0.7"}}>新歌</i> </p> <p className={"pright"}> 更多新碟 </p>
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

                </div>


                <footer>
                    <div style={{marginTop:"200px"}}></div>
                </footer>
            </>
        )
    }
    componentDidUpdate(){
        swiper.swiper()
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
    return{
        bannerList:state.discover.banner,
        rdsonglist:state.discover.rdSongs,
        newdishList:state.discover.newdish,
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
                    dispatch({
                        type:"GET_BANNER",
                        payload:{
                            banner:data.banners,
                        }
                    })
                    
                })
            })
        },
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

        getEssCloud(){
            dispatch(()=>{
                this.$axios.get("/personalized/mv",{
                    params:{
                        
                    }
                }).then(({data})=>{
                    console.log(data)
                    dispatch({
                        type:"GET_ESS_CLOUD",
                        payload:{
                            
                        }
                    })
                    
                })
            })
        }

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Discover)
//top/playlist  //歌单分类 ：歌单(网友精选碟)歌单广场点进去后的页面数据