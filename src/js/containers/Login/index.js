import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

// 逻辑和redux业务功能
import * as TimerActions from 'app/actions/TimerActions'

// 第三方组件和自己封装组件
import { Button, InputItem } from 'antd-mobile';

// 样式
import './index.scss'

// 引入API
import API from './service.js'

class Login extends React.Component {

	constructor (props) {
        super(props);
	}
	state = {
		height: document.documentElement.clientHeight
	}
	componentDidMount() {
	// this.autoFocusInst.focus();
	}
	handleClick = () => {
		const path = `/homepage`
		browserHistory.push(path);

		// API.sayHelle();
		// API.get_tbl_list().then(d => {
		// 	console.log(11111);
		// })
		// console.log(API);
	}

	render() {
		const { state, actions } = this.props;

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
						ref={el => this.autoFocusInst = el}
					></InputItem>
					<InputItem
						className="inputItem"
						editable="{true}"
						clear
						placeholder="请输入密码"
						ref={el => this.inputRef = el}
					></InputItem>
				</div>			
				<div className="login-submit">
					<Button type="primary" onClick={this.handleClick}>登录</Button>
					<p>
						<a href="javascript:void(0);">手动设置服务器地址</a>
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