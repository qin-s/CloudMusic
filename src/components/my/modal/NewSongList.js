import { Modal,WingBlank} from 'antd-mobile';
import React from "react";
import {connect} from "react-redux"
import myActionCreator from "../../../store/actionCreater/my"
const prompt = Modal.prompt;
class NewsSongList extends React.Component{
  render(){
    return (
      <WingBlank size="lg">
        <span onClick={() => 
        {prompt('新建歌单','',this.addNewsSongList.call(this));        
      }
    }
      className="iconfont icon-jia"></span>
     </WingBlank>
    )
  }
  addNewsSongList(){
     let inputValue = document.querySelector("input[type='text']")[0].value.trim();
     console.log(1111111111111);
      this.$axios.get("playlist/create",{
            params:{
                name:inputValue
            }
        }).then(({data})=>{
            console.log("新建歌单成功",data)
            this.props.getSongList.call(this)
            console.log(22222222222)
        })
      // console.log(1111111111111111111111,this.props.getSongList)
  }
  componentDidMount(){
    // this.props.getSongList.call(this)
  }
}

export default NewsSongList