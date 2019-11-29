import React from "react"
import {connect} from "react-redux";
class VideoEvery extends React.Component{
    render(){
        return (
            <div>
                123456
            </div>
        )
    }
    async componentDidMount() {
        const {data} = await this.$axios.get("/video/group/list")
        console.log(data)
    }
}
function mapStateToProps(){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoEvery)