import React from "react"
class MySwiper extends React.Component{
    render(){
        return (
        <div className="my-swiper">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="swiper-icon">
                            <span className="iconfont icon-FM"></span>
                        </div>
                        <div className="swiper-icon-name">私人FM</div>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiper-icon">
                            <span className="iconfont icon-FM"></span>
                        </div>
                        <div className="swiper-icon-name">ACG专区</div>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiper-icon">
                            <span className="iconfont icon-FM"></span>
                        </div>
                        <div className="swiper-icon-name">最强电音</div>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiper-icon">
                            <span className="iconfont icon-FM"></span>
                        </div>
                        <div className="swiper-icon-name">Sati空间</div>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiper-icon">
                            <span className="iconfont icon-FM"></span>
                        </div>
                        <div className="swiper-icon-name">私藏推荐</div>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiper-icon">
                            <span className="iconfont icon-FM"></span>
                        </div>
                        <div className="swiper-icon-name">因乐交友</div>
                    </div>  
                    <div className="swiper-slide">
                        <div className="swiper-icon">
                            <span className="iconfont icon-FM"></span>
                        </div>
                        <div className="swiper-icon-name">亲子频道</div>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiper-icon">
                            <span className="iconfont icon-FM"></span>
                        </div>
                        <div className="swiper-icon-name">古典专区</div>
                    </div>
                    <div className="swiper-slide">
                        <div className="swiper-icon swiper-last">
                            <span className="iconfont icon-sanheng"></span>
                        </div>
                        <div className="swiper-icon-name">编辑</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    componentDidMount(){
        // this.$axios.get("playlist/create",{+++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //     params:{
        //         name:"海阔天空"
        //     }
        // }).then(({data})=>{
        //     console.log("关键字搜索：",data)
        // })
    }
}
export default MySwiper