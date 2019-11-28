import React from "react";
// import store from "../store"
import {
	connect
} from "react-redux"
import "../assets/css/login-css/login.css"
 class Login extends React.Component{
    render(){
        return (
            <div>
	
		<div className="logo">
			<p><i className="iconfont icon-zoom"></i></p>
		</div>
		
		<div className="login">
			<input type="text" placeholder="请输入手机号" ref="login"/><br/>
			<input type="text" placeholder="请输入密码" ref="password"/>
			<input type="button" value="登录" onClick={this.props.getPhone.bind(this)}/>
		</div>
		
		<div className="t-tong"><input type="radio"/> <span>同意</span> 《服务条款》《隐私政策》《儿童隐私政策》</div>
            </div>
        )
	}
	componentDidMount(){
		this.props.getPhone.call(this)
		}
	}
	function mapStateToProps(state){
		console.log(state)
		return {
			id:state.login.id
		}
	}
	function mapDispatchToProps(dispatch){
		return{
		getPhone(){
			dispatch(()=>{
				this.$axios.get("/login/cellphone",{
					params:{
						phone:15734551563,
						password:960608
					}
				}).then(({data})=>{
					dispatch({
						type:"UPLOAD",
						payload:{
							id:data.account.id
						}
					})
					console.log(data,9999)
				})
			})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)