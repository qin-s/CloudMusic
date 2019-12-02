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
            null
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
        const arr = []
        for(let i =0;i<this.state.mv.length;i++) {
              arr.push(this.$axios.get("/mv/url",{
                  params:{
                      id:this.state.mv[i].id
                  }
              }))
        }
        const brr = await Promise.all(arr)
        const obj = {}
        // console.log(brr)
        for(let i=0;i<this.state.mv.length;i++){
            obj[this.state.mv[i].name] = brr[i].data.data.url
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

