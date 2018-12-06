import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { Back } from '../../../components'

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

	handleClick = () => {
		const path = `/`
		hashHistory.push(path);
	}

	render() {
		return (
			<div className="login-server">
				<Back/>
				<header>
					服务器配置
				</header>
				<div className="content">
					<p>请输入服务器地址，以http://或https://开头</p>
					<InputItem
						editable="{true}"
						clear
						value={this.state.server}
						onChange={this.serverChangeHandle}
					></InputItem>
				</div>
				<div className="login-submit">
					<Button type="primary" onClick={this.handleClick}>确认</Button>
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