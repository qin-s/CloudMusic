import React from 'react';
import {connect} from "react-redux";
class VideoAll extends React.Component{
    constructor(){
        super()
        this.state={
            arr:[],
            mv:[]
        }
    }
    render(){
        return (
            <div>
                {
                    this.props.vids.map(v=>(
                        <div key={v.id} className={"mvList"}>
                            <video  style={{height:"270px",
                                width:"400px",
                                preload:"none",
                                outline:"none"}} src={v.url}  controls></video>
                        </div>
                    ))
                }
            </div>
        )
    }
    componentDidMount() {
        this.getAllMv()
    }
    async getAllMv(){
        const {data} = await this.$axios.get("/mv/all",{
            params:{
                limit:10
            }
        })
        this.setState({
            mv:data.data
        })
        const mvLength = this.state.mv
        for(let i =0;i<this.state.mv.length;i++) {
            this.props.getVids.call(this,this.state.mv[i].id)
        }
    }
}
function mapStateToProps(state){
    return {
        vids:state.video.vids
    }
}
function mapDispatchToProps(dispatch){
    return {
        getVids(id){
            dispatch((dsipatch)=>{
                this.$axios.get("/mv/url",{
                    params:{
                        id
                    }
                }).then(
                    ({data})=>{
                        this.state.arr.push(data.data)
                        if(this.state.arr.length===10){
                            dispatch({
                                type:"UP_LIST",
                                payload:{
                                    vids:this.state.arr
                                }
                            })
                        }
                    }
                )
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoAll)

