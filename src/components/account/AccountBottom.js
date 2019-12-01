import React,{Fragment} from "react";
import "../../assets/css/account/accountbottom.css";
export default class AccountCenter extends React.Component{
    render(){
        return (
            <Fragment>
                <div>
                    <div><i className="iconfont icon-lingsheng"></i> <span>口袋彩铃</span><b className="iconfont icon-youjiantou"></b></div>
                    <div><i className="iconfont icon-wodedingdan"></i> <span>我的订单</span><b className="iconfont icon-youjiantou"></b></div>
                </div>
                <div>
                    <div><i className="iconfont icon-shezhi"></i> <span>设置</span><b className="iconfont icon-youjiantou"></b></div>
                    <div><i className="iconfont icon-yejianmoshi"></i> <span>夜间模式</span><b className="iconfont icon-youjiantou"></b></div>
                    <div><i className="iconfont icon-dingshitingzhibofang"></i> <span>定时关闭</span><b className="iconfont icon-youjiantou"></b></div>
                    <div><i className="iconfont icon-yinlenaozhong"></i> <span>音乐闹钟</span><b className="iconfont icon-youjiantou"></b></div>
                </div>
                <div>
                    <div><i className="iconfont icon-zaixiantinggemianliuliang"></i> <span>在线听歌免流量</span><b className="iconfont icon-youjiantou"></b></div>
                    <div><i className="iconfont icon-tubiao--"></i> <span>优惠券</span><b className="iconfont icon-youjiantou"></b></div>
                    <div><i className="iconfont icon-dunpai"></i> <span>青少年模式</span><b className="iconfont icon-youjiantou"></b></div>
                </div>
                <div>
                    <div><i className="iconfont icon-fen-xiang-zhuan-fa"></i> <span>分享网易云音乐</span><b className="iconfont icon-youjiantou"></b></div>
                    <div><i className="iconfont icon-guanyu"></i> <span>关于</span><b className="iconfont icon-youjiantou"></b></div>
                </div>
            </Fragment>    
        )
    }
}