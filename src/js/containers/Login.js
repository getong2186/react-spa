import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TimerActions from 'app/actions/TimerActions'
import { Button, WhiteSpace, WingBlank, List, InputItem } from 'antd-mobile';
import { browserHistory } from 'react-router'
import styles from './login.scss'

class Login extends Component {
	componentDidMount() {
	// this.autoFocusInst.focus();
	}
	handleClick = () => {
		const path = `/homepage`
		browserHistory.push(path);
	}

	render() {
		// const { getFieldProps } = this.props.form;
		return (
			<div className="login">
				<WingBlank>
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
						<Button type="primary" onClick={this.handleClick}>登录</Button><WhiteSpace />
						<p>
							<a href="javascript:void(0);">手动设置服务器地址</a>
						</p>
					</div>
				</WingBlank>
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