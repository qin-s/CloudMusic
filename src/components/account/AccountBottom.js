import React from "react";
import "../../assets/css/account/accountbottom.css";
export default class AccountCenter extends React.Component{
    render(){
        return (
            <div className="cm_account_bottom" style={{"marginBottom":localStorage.uid?"0":"100px"}}>
                <div className="cm_account_bottom_border_top">
                    <div><i className="iconfont icon-lingsheng"></i> <p>口袋彩铃<b className="iconfont icon-youjiantou"></b></p></div>
                    <div><i className="iconfont icon-wodedingdan"></i> <p className="cm_account_bottom_p1">我的订单<b className="iconfont icon-youjiantou"></b></p></div>
                </div>
                <div style={{display:localStorage.uid?"flex":"none"}} className="cm_account_bottom_border_top">
                    <div><i className="iconfont icon-wodexiangfa"></i> <p className="cm_account_bottom_p1">创作者中心<b className="iconfont icon-youjiantou">&nbsp;&nbsp;&nbsp;</b></p></div>
                </div>
                <div className="cm_account_bottom_border_top">
                    <div><i className="iconfont icon-shezhi"></i> <p>设置<b className="iconfont icon-youjiantou"></b></p></div>
                    <div><i className="iconfont icon-yejianmoshi"></i> <p>夜间模式<b className="iconfont icon-youjiantou"></b></p></div>
                    <div><i className="iconfont icon-dingshitingzhibofang"></i> <p>定时关闭<b className="iconfont icon-youjiantou"></b></p></div>
                    <div><i className="iconfont icon-yinlenaozhong"></i> <p className="cm_account_bottom_p1">音乐闹钟<b className="iconfont icon-youjiantou"></b></p></div>
                </div>
                <div className="cm_account_bottom_border_top">
                    <div><i className="iconfont icon-zaixiantinggemianliuliang"></i> <p>在线听歌免流量<b className="iconfont icon-youjiantou"></b></p></div>
                    <div><i className="iconfont icon-tubiao--"></i> <p>优惠券<b className="iconfont icon-youjiantou"></b></p></div>
                    <div><i className="iconfont icon-dunpai"></i> <p className="cm_account_bottom_p1">青少年模式<b className="iconfont icon-youjiantou"></b></p></div>
                </div>
                <div className="cm_account_bottom_border_top cm_account_bottom_border_bottom">
                    <div><i className="iconfont icon-fen-xiang-zhuan-fa"></i> <p>分享网易云音乐<b className="iconfont icon-youjiantou"></b></p></div>
                    <div><i className="iconfont icon-guanyu"></i> <p className="cm_account_bottom_p1">关于<b className="iconfont icon-youjiantou"></b></p></div>
                </div>
            </div>
        )
    }
}