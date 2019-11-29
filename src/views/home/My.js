import React from "react";
import "../../assets/css/my/my.css"
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import MyHeader from "../../components/my/MyHeader"
import MySwiper from "../../components/my/MySwiper"
import MyLocalList from "../../components/my/MyLocalList"
import MyCreateLove from "../../components/my/MyCreateLove"
import MyCreateCollection from "../../components/my/MyCreateCollection"
export default class My extends React.Component{
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
                    <div className="my-create-song">
                        <div className="my-create-nav create-common">
                            <div className="create-nav-left"  onClick={()=>{
                            this.setState({
                                    isShow:!this.state.isShow
                                })
                            }}>
                                <b className={this.state.isShow?"iconfont icon-jiantou_bottom":"iconfont icon-jiantou_right"}></b>
                                <b>我创建的歌单</b>
                                <i>(3)</i>
                            </div>
                            <div className="create-icon">
                                <span className="iconfont icon-jia"></span>
                                <span className="iconfont icon-caidan-dian"></span>
                            </div>
                        </div>
                        <MyCreateLove isShow={this.state.isShow}></MyCreateLove>
                    </div>
                    {/* 我收藏的歌单 */}
                    <div className="my-create-song">
                        <div className="my-create-nav">
                            <div className="create-nav-left" onClick={()=>{
                                this.setState({
                                    isShowTwo:!this.state.isShowTwo
                                })
                            }}>
                                <b className={this.state.isShowTwo?"iconfont icon-jiantou_bottom":"iconfont icon-jiantou_right"}></b>
                                <b>我收藏的歌单</b>
                                <i>(3)</i>
                            </div>
                            <div className="create-icon">
                                <span className="iconfont icon-caidan-dian"></span>
                            </div>
                        </div>
                            <MyCreateCollection {...this.props} isShowTwo={this.state.isShowTwo}></MyCreateCollection>
                    </div>
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
    }
}