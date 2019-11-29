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
	
		<div className="t-logo">
			<p><i className="iconfont icon-music"></i></p>
		</div>
		
		<div className="t-login">
			<input type="text" placeholder="请输入手机号" ref="login"/><br/>
			<input type="text" placeholder="请输入密码" type="password" ref="password"/><br/>
			<input type="button" value="登录" onClick={this.props.getPhone.bind(this)}/>
		</div>
		
		<div className="t-tong"><input type="radio"/> <span>同意</span> 《服务条款》《隐私政策》《儿童隐私政策》</div>
            </div>
        )
	}
	componentDidMount(){
		this.props.getPhone.bind(this)

		}
	}
	function mapStateToProps(state){
		console.log(state,888)
		return {
			id:state.login.id,
			username:state.login.username
		}
	}
	function mapDispatchToProps(dispatch){
		return{
		getPhone(){
			dispatch(()=>{
				this.$axios.get("/login/cellphone",{
					
					params:{
						phone:this.refs.login.value,
						password:this.refs.password.value
					}
				}).then(({data})=>{
					// console.log(data)
					dispatch({
						type:"UPLOAD",
						payload:{
							id:data.account.id,
							username:data.profile.nickname
						}
					})
					console.log(data,9999)
					if(data.account.id){
						// if(data.code === 502){
						// 	alert(data.msg)
						// }
						this.props.history.push("/")
					}else{
						
						this.props.history.push("/zhuce")
					}
				})
			})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)