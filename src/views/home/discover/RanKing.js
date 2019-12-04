import React,{Fragment} from 'react';
import '../../../assets/css/discover/ranking.scss';
import {
    connect
} from 'react-redux';
class DaySongs extends React.Component{
    render(){
        return(
            <div>
            <header>
                <div className={"songsquare"}>
                <i onClick={()=>{this.props.history.push("/discover")}} className={"iconfont icon-flow "}></i>
                <p>排行榜</p>
                </div>
            
            </header>


            </div>
        )
    }
 
     
    
    componentDidUpdate(){
    
    }
    componentDidMount(){
        this.props.getAllKing.call(this)
        this.props.getDetail.call(this)
        this.props.getaaa.call(this)
    }
}
function mapStateToProps(state){
 
    return{
      
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllKing(){
            this.$axios.get("/toplist",{
                params:{
                    // idx:1
                }
            }).then(({data})=>{
                // console.log(data)
            })
        },
        getDetail(){
            this.$axios.get("/playlist/detail",{
                params:{
                    id:924680166
                    // id:32311
                }
            }).then(({data})=>{
                console.log(data,"11111111111")
                // console.log(data.privileges,"detail") 1406533290
                // data.privileges.map(v=>{
                //     console.log(v.id,"song")
                   
                // })
            })
        },
        getaaa(){
            this.$axios.get("/song/url",{
                params:{
                    id:1406257254
                }
            }).then(({data})=>{
                // console.log(data,"detailsong")
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DaySongs)