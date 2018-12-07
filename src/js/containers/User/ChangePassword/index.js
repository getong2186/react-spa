import React, { Component } from 'react'
import { Back } from '../../../components'
import { List } from 'antd-mobile';

// 第三方组件和自己封装组件
import { Button, InputItem, Toast } from 'antd-mobile';

import './index.scss';

const Item = List.Item;

export default class Detail extends Component {
	constructor (props) {
		super(props);
		this.state = {
			height: document.documentElement.clientHeight,
			username: '',
			password: '',
			btnDisabled: true
		}
	}

	userNameChangeHandle = (value) => {
		this.setState({
			username: value
		})
	}
	
	passwordChangeHandle = (value) => {
		this.setState({
			password: value
		})
	}
	
	handleClick = () => {
		const path = `/homepage`
		hashHistory.push(path);		
		console.log(this.state);
	}

  render() {
    return (
      	<div className="change-password">
			<Back/>
			<header>
				修改密码
			</header>
			<div className="content">
				<p>旧密码</p>
				<InputItem
						editable="{true}"
						clear
						placeholder="若包含字母，请注意区分大小写"
						value={this.state.username}
						onChange={this.userNameChangeHandle}
					></InputItem>
				<p>新密码</p>
				<InputItem
						editable="{true}"
						clear
						placeholder="8-16位，至少包含数字、字母、字符2种组合"
						value={this.state.username}
						onChange={this.userNameChangeHandle}
					></InputItem>
			</div>
			<div className="submit-pack">
				<Button type="primary" onClick={this.handleClick}>确认</Button>
			</div>
		</div>
    )
  }
}