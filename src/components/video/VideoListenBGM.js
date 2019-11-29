import React from "react"
import {connect} from "react-redux";
class VideoEvery extends React.Component{
    render(){
        return (
            <div>

            </div>
        )
    }
    UNSAFE_componentWillMount() {
    }

    componentDidMount() {
        this.props.getListenBgmList.call(this)
    }
}
function mapStateToProps(){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return {
            async getListenBgmList(){
                dispatch(()=>{
                    console.log(111111111)
                    const {data} = this.$axios.get("/video/group",{
                        params:{
                            id:58101,
                        }
                    })
                    console.log(data)
                    console.log(222222222)
                })
            }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoEvery)