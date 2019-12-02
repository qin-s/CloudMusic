import React from "react"
import myActionCreator from "../../../store/actionCreater/my"
import {connect} from "react-redux"
class MyCollectSinger extends React.Component{
    render(){
        return(
            <>
            {
                this.props.collectSinger.data?this.props.collectSinger.data.map(v=>(
                <div className="singer" key={v.id}>
                    <img src={v.picUrl} alt=""/>
                    <div className="singer-info">
                        <div className="singer-name">
                            <p>{v.trans}</p>
                            <i>专辑：{v.albumSize?v.albumSize:0}&nbsp;&nbsp;&nbsp;&nbsp;MV：{v.mvSize?v.mvSize:0}</i>
                        </div>
                        <span className="iconfont icon-caidan-dian" style={{fontSize:"22px"}}></span>
                    </div>
                </div>
                )):<div className="none-record" style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%",
                    height:"230px",
                    color:"chocolate",
                    fontSize:"14px"

                }}>暂无收藏</div>
            }
            </>
            
        )
    }
    componentDidMount(){
        this.props.getCollectSinger.call(this)
        // this.$axios.get("/artist/sublist").then(({data})=>{
            // console.log("收藏的歌手",this.props.collectSinger)
        // })
    }
}
function mapStateToProps(state){
    return {
        collectSinger:state.my.collectSinger
    }
}
function mapDispatchToProps(dispatch){
    return {
        getCollectSinger(){
            dispatch(myActionCreator.getCollectSinger.call(this))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCollectSinger)