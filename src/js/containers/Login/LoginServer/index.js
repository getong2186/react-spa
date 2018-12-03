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
// import API from './service.js'

class Login extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			server: 'http://'
		}
	}

	serverChangeHandle = (value) => {
		this.setState({
            server: value
        })
	}

	render() {
		// const { state, actions } = this.props;
		return (
			<div className="login-server">
				<span className="back">
						返回
				</span>
				<header>
					服务器设置
				</header>
				<div className="content">
					<p>服务器地址：</p>
					<InputItem
						editable="{true}"
						clear
						placeholder="请输入邮箱 / 手机号"
						value={this.state.server}
						onChange={this.serverChangeHandle}
					></InputItem>
				</div>
				
				<div className="login-submit">
					<Button type="primary" onClick={this.handleClick}>登录</Button>
				</div>
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