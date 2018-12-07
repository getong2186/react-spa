import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

// 逻辑和redux业务功能
import * as TimerActions from 'app/actions/TimerActions'

// 第三方组件和自己封装组件
import { Button, InputItem, Toast } from 'antd-mobile';
// 样式
import './index.scss'

// 引入API
import API from './service.js'

class Login extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			height: document.documentElement.clientHeight,
			username: '',
            password: '',
            isshowPassword: false,
            showPassword: require('./imgs/icon_login_showpassword.png'),
            hidePassword: require('./imgs/icon_login_hidepassword.png'),
			btnDisabled: true
		}
	}
	setBtnDisabled = () => {
		let _this = this;
		setTimeout(function() {
			if (!_this.state.username || !_this.state.password) {
				_this.setState({
					btnDisabled: true
				});
			} else {
				_this.setState({
					btnDisabled: false
				});
			}
		}, 0);
	}

	userNameChangeHandle = (value) => {
		this.setState({
            username: value
		})
		this.setBtnDisabled();
	}
	
	passwordChangeHandle = (value) => {
		this.setState({
            password: value
		})
		this.setBtnDisabled();
	}
	
	handleClick = () => {
		const path = `/homepage`
		hashHistory.push(path);
		// Toast.success('Load success !!!', 3);
		// API.sayHelle();
		// API.get_tbl_list().then(d => {
		
		console.log(this.state);
		// })
		// console.log(API);
	}

    showPasswordClick = () => {
        this.setState({
            isshowPassword: !this.state.isshowPassword
		})
        console.log(11111);
    }
	render() {
		return (
			<div className="login">
				<header>
					<img src={require(`./imgs/logo.png`)} alt="icon"/>
				</header>
				<div className="content">
					<InputItem
						editable="{true}"
						clear
						placeholder="请输入邮箱 / 手机号"
						value={this.state.username}
						onChange={this.userNameChangeHandle}
					></InputItem>
                    <div className="password-pack">
                        <InputItem
                            className="inputItem"
                            editable="{true}"
                            // clear
                            placeholder="请输入密码"
                            type={this.state.isshowPassword? 'text': 'password'}
                            value={this.state.password}
                            onChange={this.passwordChangeHandle}
                        >
                        </InputItem>
                        <a className="show-password" onClick={this.showPasswordClick}>
                            <img src={this.state.isshowPassword? this.state.showPassword : this.state.hidePassword} alt="icon"/>
                        </a>
                    </div>
					
				</div>			
				<div className="login-submit">
					<Button type="primary" disabled={this.state.btnDisabled} onClick={this.handleClick}>登录</Button>
					<p>
						<a href="#/server">手动设置服务器地址</a>
					</p>
				</div>
				<footer style={{top: (this.state.height - 40)+'px'}}>
				{/* <footer> */}
					<p>红芯v1.4.1</p>
				</footer>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	state: state.timer
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TimerActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)