import React from "react";
import {connect} from "react-redux"
import "../assets/css/zhuce/zhuce.css"
class Zhuce extends React.Component {
    render() {
        return (
            <div >
                <div className="t-input">
                    <input type="text" placeholder="请输入手机号" className="t-three"
                        ref="phone" />

                    <input type="text" placeholder="密码啊" className="t-three"
                        ref="password" />

                    <input type="text" placeholder="昵称"
                        ref="ni" className="t-three" />

                    <input type="text"
                        className="t-three" placeholder="请输入验证码" ref="captcha" />
                </div>

                <div className="yan">
                    <input type="button" className="t-one1" value="获取验证码" onClick={this.props.getCaptcha.bind(this)} ref="yan" />

                    <input type="button" className="t-one1" value="登录" onClick={this.props.submitdata.bind(this)} />

                </div>

            </div>
        )
    }

}



function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        getCaptcha() {
            dispatch(() => {
                this.$axios.get("/captcha/sent", {
                    params: {
                        phone: this.refs.phone.value
                    }
                }).then(({data}) => {
                    console.log(data)
                    
                })
            })

        },
        submitdata() {
            dispatch(() => {
                this.$axios.get("/register/cellphone", {
                    params: {
                        captcha: this.refs.captcha.value,
                        phone: this.refs.phone.value,
                        password: this.refs.password.value,
                        nickname: this.refs.ni.value
                    }
                }).then(({data}) => {
                    if(data.code){
                        alert("注册成功")
                        this.props.history.push("/login")
                    }
                    console.log(data)
                })
            })

        }


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Zhuce)