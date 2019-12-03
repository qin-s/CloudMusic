import React from "react";
import {
    connect
} from "react-redux"
import "../../../assets/css/style-assects/hot.css"
class Hotwall extends React.Component {
    constructor() {
        super();
        this.state = {
            hotwall: []
        }
    }
    render() {
        return (
            <div>
                <div className="t-hotp">
                    <span> 《 </span>
                    <p>热评墙</p>
                    <p>25/30</p>
                </div>
                {
                    this.props.hot.map(v => (
                        <div className="t-ping" key={v.id}>
                            <div className="t-user">
                                {/* <div className="t-img" style={{backgroundImage:`"url("+${v.simpleResourceInfo.songCoverUrl}+")"`}}> */}
                                <div className="t-box">
                                    <img className="t-imag" src={v.simpleUserInfo.avatar} alt="" />
                                    <a href="">+关注</a>
                                </div>
                                <div className="t-wen2">
                                    <p className="t-yinh">“</p>
                                    <p className="t-hua">
                                        {v.content}
                                    </p>
                                    <div className="t-ge">
                                        <div>{v.simpleResourceInfo.name}</div>
                                        <i className="iconfont icon-diancai1-copy"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
    componentDidMount() {
        this.props.getHotwall.call(this)
    }
}

function mapStateToProps(state) {
    console.log(state, 999)
    return {
        hot: state.yuncun.hotwall,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        getHotwall() {
            dispatch(() => {
                this.$axios.get("/comment/hotwall/list")
                    .then(({ data }) => {
                        console.log(data, 888)
                        dispatch({
                            type: "GET_HOTWALL",
                            payload: {
                                hotwall: data.data
                            }
                        })
                    })
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotwall)