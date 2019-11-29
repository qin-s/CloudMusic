import { Tabs, WhiteSpace } from 'antd-mobile';
import Guang from "../../components/yuncun/Guang"
import React from "react";
import Allmv from "../../components/yuncun/mv"


export default class Yuncun extends React.Component {


  render() {
    const tabs = [
      { title: '广场' },
      { title: '关注' },
 
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={tabs}  renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          
          {/* {this.renderContent} */}
          {/* <Guang></Guang> */}
          <Allmv></Allmv>        
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

// ReactDOM.render(<Demo />, mountNode);


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