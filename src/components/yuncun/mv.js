import React, { Fragment } from "react";
import "../../assets/css/style-assects/mv.css"

export default class Allmv extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                <div className="t-guan">
                    <p>发动态</p>
                    <p>发布视频</p>
                </div>
                <div className="t-yin"></div>
                <div className="t-title">
                    <p>
                        <img src={""} alt="" />
                        <span>关注主题</span>
                    </p>
                    <p>></p>
                </div>
                <hr />
                <div className="t-fen" key={"v.id"}>
                    {this.state.data.map(v => (
                        <Fragment>
                            <div className="t-tou">
                                <p><img style={{width:"50px"}} src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg" alt="" /></p>
                                <p className="t-time">


                                    <p className="t-ming">{v.user.description}1分享单曲:</p>
                                    <p>08:23</p>
                                </p>

                            </div>
                            <div className="t-wen">
                                <div>
                                    {v.pics.map((v) => (
                                        <Fragment key={v.originUrl}>
                                            <img style={{ width: "200px" }} src={v.originUrl} alt="" />
                                        </Fragment>
                                    ))}
                                </div>

                                <p> {JSON.parse(v.json).msg}</p><br />
                                {JSON.parse(v.json).video ? <img src={JSON.parse(v.json).video.coverUrl} alt=""></img> : null}

                            </div>
                            <div className="t-music">
                                <img style={{ width: "50px" }} src="https://p2.music.126.net/lPKiKRKTvbxS-bPLY67Diw==/109951164516915218.jpg" alt="" />
                                <p>{v.info.commentThread.resourceTitle}</p>
                                {/* <p>kemi</p> */}
                            </div>
                            
                            <div className="t-zhuan">
                                    <p>{v.info.shareCount}</p>
                                    <p>{v.info.commentCount}</p>
                                    <p>{v.info.likedCount}</p>
                                    <p>{}</p>
                            </div>
                            <hr/>

                        </Fragment>
                    ))
                    }
                  

                </div>
            </div>
        )
    }
    componentDidMount() {
        this.$axios.get("/event", {
            params: {
                pagesize: 20,
                lasttime: -1
            }
        }).then(({ data }) => {
            console.log(data)
            this.setState({
                data: data.event
            })
        })
    }
}
