import React from "react"
class MyCollectColumn extends React.Component{
    render(){
        return(
            <div className="singer">
                <img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt=""/>
                <div className="singer-info">
                    <div className="singer-name">
                        <p>周杰伦</p>
                        <i>1首</i>
                    </div>
                    <span className="iconfont icon-caidan-dian" style={{fontSize:"22px"}}></span>
                </div>
            </div>
        )
    }
}
export default MyCollectColumn