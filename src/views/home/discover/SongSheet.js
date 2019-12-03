import { Tabs, WhiteSpace } from 'antd-mobile';
import React,{Fragment} from 'react'
import "../../../assets/css/discover/songsheet.scss"
import { connect } from 'react-redux';
 class SongSheet extends React.Component {
  render() {
    const tabs = [];
    this.props.songsheetList.map(v=>(
        // console.log(v,"1111111")
        tabs.push({"title":v})
    ))
    const divStyle=React.CSSProperties = {
        fontSize:"20px",
        margin:"15px 0",
      };
    const divss=React.CSSProperties = {
       border:"1px solid red"
      };
    return (
      <div>
          <header>
              <div className={"songsquare"}>
              <i onClick={()=>{this.props.history.push("/discover")}} className={"iconfont icon-flow "}></i>
              <p>歌单广场</p>
              </div>
         
          </header>
        <WhiteSpace  />
        <Tabs tabBarUnderlineStyle={divss} tabBarActiveTextColor={"red"} tabBarTextStyle={divStyle}   tabs={tabs}  onTabClick={(data)=>{return this.props.getSongSheet.bind(this,data)()}}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3}  />}>
            <div>
            <div style={{border:"1px solid #ccc",marginBottom:"10px"}}></div>
                <ul className={"squaretitle"}>
               { 
                    this.props.songsheetcontent.length>0?this.props.songsheetcontent.map((v,i)=>(
                        <div key={i}>
                            <li>
                                <img style={{width:"110px",height:"100px",marginBottom:"8px"}} src={v.coverImgUrl} alt=""/>
                                {v.name}
                                <div className={"squareleft"}></div>
                                <div className={"squareright"}><i className={"iconfont icon-triangle "}></i>{String(v.playCount).substr(0,String(v.playCount).length-4)+"万"}</div>
                            </li>
                        </div>
                    )): <div style={{fontSize:"30px"}}>加载中······</div>
                 
                } 
                </ul>
              
              
            </div>
        </Tabs>
        <WhiteSpace />
     
      </div>
    );
  }

  componentDidMount(){
      this.props.getSongSheet.call(this)
  
  }
}
function mapStateToProps(state){
    return {
        songsheetList:state.discover.songsheet,
        songsheetcontent:state.discover.changesongsheet?state.discover.changesongsheet:[]
    }
}
function mapDispatchToProps(dispatch){
    
    return {    
        getSongSheet(res){
            
            console.log(res)
            dispatch({
                type:"SONG_SHEET",
                payload:{
                    changesongsheet:[]
                }
            });
            if(res){
                if(res.title === "推荐")
                res.title = ""
            }
            dispatch(()=>{
                
                this.$axios.get("/top/playlist",{
                    params:{
                        cat:res?res.title:"",
                        limit:36,
                        
                    }
                }
                ).then(({data})=>{
                    // console.log(data,"data")
                    if(data.playlists.length===0){
                       
                        this.$axios.get("/top/playlist/highquality",{
                            params:{
                                limit:36,
                            }
                        }).then(({data})=>{
                            console.log(data,"222222222222222222222")
                            dispatch({
                                type:"SONG_SHEET",
                                payload:{
                                    changesongsheet:data.playlists
                                }
                            });
                        })
                    }else{
                        console.log("Cuole")
                    
                    dispatch({
                        type:"SONG_SHEET",
                        payload:{
                            changesongsheet:data.playlists
                        }
                    });

            
                }
                })
           
               
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SongSheet)