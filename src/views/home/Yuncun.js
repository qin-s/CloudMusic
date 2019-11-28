import React,{Fragment} from "react";
// import store from "../../store"
import {
    Route,
    NavLink
} from "react-router-dom"
import '../../assets/css/style-assects/yuncun.css';
export default class Yuncun extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    render(){
        return (
            <div>
                <div className="t-header">
                    <i className={"iconfont icon-wodeshoucang"}></i>
                    {/* <p>广场</p>
                    <p>动态</p> */}
               
                    <NavLink className="t-one" to={"/yuncun"}>广场</NavLink>
                    <NavLink className="t-two" to={"/Dong"}>动态</NavLink>
                
                    <Route path={"/yuncun"}></Route>
                    <i className={"iconfont icon-play"}></i>
                 </div>
                 <div className="t-search">
                    <div className={"t-sear"}>
                        <i className={"iconfont icon-zoom"}>
                        <span>晚安</span>
                        </i></div>
                </div>
                <div className="t-hotwall">
                    <div>
                    <p className="t-yun">云村热评墙></p>
                    <p className="t-hi">Hi,哈哈哈哈，快来围观吧~</p>
                    </div>
                    <div className="t-date">
                        <p>
                            <span>Nov.</span><br/>
                            <span>27</span>
                        </p>
                    </div>
                </div>
                <div className="t-hot">
                   
                    {
                     this.state.data.map(v=>(
                        <Fragment key={v.id}>
                            <div className="t-one1">
                            <img  src={v.cover} alt=""/>
                            <h3>{v.briefDesc}</h3>
                            <div>
                                <img src="" alt=""/>
                                <span>{v.name}</span>
                                <i className={"iconfont icon-sandian"}></i>
                            </div>
                    </div>
                  
                        </Fragment>
                    ))
                }
                </div>
          
              
            </div>
        )
    }
// 10887873
    componentDidMount(){
        this.$axios.get("/mv/all",{
            params:{
                area:"港台"
            }
        })
        .then(({data})=>{
            console.log(data,111)
            this.setState({
                data:data.data
            })
        })  
    }
}
// function mapStateToProps(tate){
//     this.$axios.get("/mv/url",{
//         params:{
//             id
//         }
//     }).then(({data1})=>{
//         console.log(data1)
//     })
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Yuncun)