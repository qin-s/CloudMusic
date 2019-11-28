import React from 'react';
import "../../assets/css/discover/discover.css"
import swiper from '../../components/discover/swiper'
import {
    connect
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
                <nav>
                    <div className={"ull"}>
                        <div><i className={"iconfont icon-wodediantai left"}></i></div>
                      <div className={"mid"}> <a className={"adisco"} href={"http://www.baidu.com"}> <i className={"iconfont icon-zoom midd"}>
                          <b className="nan">我太难了</b>  
                            </i></a> </div>
                        <div> <i className={"iconfont icon-wodediantai right"}></i>  </div>
                    </div>    
                </nav>  

                <article>
                    {
                        <div className="swiper-container">
                        <div className="swiper-wrapper ">
                       {
                            this.props.bannerList.map(v=>(
                                    <div className={"swiper-slide banner "} key={v.bannerId}>
                                            <img src={'http://47.97.197.144:3005/img?url='+v.pic} alt=""/>
                                            <p className={"rightdown"}>{v.typeTitle}</p>
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

                <div className={"songs"}>
                    <div>推荐歌单</div>
                    <div> <p className={"pleft"}> 为你精挑细选 </p> <p className={"pright"}> 查看更多 </p>
                    </div>
                </div>
            </>
        )
    }
    componentDidUpdate(){
        swiper.swiper()
    }
    componentDidMount(){
        this.props.getBanner.call(this) 
    }
}
function mapStateToProps(state){
    // console.log(state.discover)
    return{
        bannerList:state.discover.banner
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
                        payload:data.banners
                    })
                    
                })
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Discover)