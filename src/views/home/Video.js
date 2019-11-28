import React from "react"
import {
    connect
} from "react-redux"
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import "../../assents/css/video.css"

import VideoRecommend from "../../components/video/VideoRecommend";
import VideoAll from "../../components/video/VideoAll"

class Video extends React.Component{
    constructor(){
        super()
        this.state={
            arr:["推荐","全部","最新","网易出品"],
            num:0,
        }
    }
    render(){
        return (
            <div className={"videoContent"}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.arr.map((v,i)=>(
                                <div key={i} className="swiper-slide" onClick={this.doComponent.bind(this,i)}>{v}</div>
                            ))
                        }
                    </div>
                </div>
                <VideoRecommend {...this.props}></VideoRecommend>
                <VideoAll style={{
                    display:((this.state.num === 1)?'block':'none')
                }} {...this.props}></VideoAll>
            </div>
        )
    }
    doComponent(i){
        console.log(this.setState({
            num:i
        }))
    }
    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
        });
    }

}
function mapStateToProps(state,props){
    return {
    }
}
function mapDispatchToProps(dispatch){
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Video)