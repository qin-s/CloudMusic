import React from "react";
import "../../assets/css/my/my.css"
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import MyHeader from "../../components/my/MyHeader"
import MySwiper from "../../components/my/MySwiper"
import MyLocalList from "../../components/my/MyLocalList"
import MyCreateLove from "../../components/my/MyCreateLove"
import {connect} from "react-redux"
import myActionCreator from "../../store/actionCreater/my"
class My extends React.Component{
    constructor(){
        super();
        this.state = {
            isShow:true,
            isShowTwo:true
        }
    }
    render(){
        return (
            <div className="my">
                {/* 头部 */}
                <MyHeader></MyHeader>
                {/* 横向滑动 */}
                <MySwiper></MySwiper>
                {/* 本地音乐 */}
                <MyLocalList {...this.props}></MyLocalList>
                {/* 创建 */}
                <div className="my-create">
                    {/* 我创建的歌单 */}
                    <div className="my-create-song" style={{marginTop:"15px"}}>
                        <div className="my-create-nav create-common">
                            <div className="create-nav-left"  onClick={()=>{
                            this.setState({
                                    isShow:!this.state.isShow
                                })
                            }}>
                                <b className={this.state.isShow?"iconfont icon-jiantou_bottom":"iconfont icon-jiantou_right"}></b>
                                <b>我创建的歌单</b>
                                <i>({this.props.songList.length})</i>
                            </div>
                            <div className="create-icon">
                                <span className="iconfont icon-jia"></span>
                                <span className="iconfont icon-caidan-dian"></span>
                            </div>
                        </div>
                        <MyCreateLove {...this.props} isShow={this.state.isShow}></MyCreateLove>
                    </div>
                    {/* 我收藏的歌单 */}
                </div> 
            </div>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        this.props.getSongList.call(this);
    }
}
function mapStateToProps(state){
    return {
        songList:state.my.songList
    }
}
function mapDispatchToProps(dispatch){
    return {
        getSongList(){
            dispatch(myActionCreator.getSongList.call(this))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(My)