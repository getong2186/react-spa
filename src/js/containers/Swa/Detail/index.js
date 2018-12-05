import React, { Component } from 'react'
import { Back } from '../../../components'

// 第三方组件和自己封装组件
import { Button, InputItem, Toast } from 'antd-mobile';

import './index.scss';

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
		// Toast.success('Load success !!!', 3);
		// API.sayHelle();
		// API.get_tbl_list().then(d => {
		
		console.log(this.state);
		// })
		// console.log(API);
	}

  render() {
  

    return (
      <div className="swa-detail">
				<Back/>
				<header>
					密码管家
				</header>

        <div className="img-pack">
          <img src={require(`./imgs/app-1.png`)} alt="" />
        </div>

        <div className="content">
					<InputItem
						editable="{true}"
						clear
						placeholder="用户名"
						value={this.state.username}
						onChange={this.userNameChangeHandle}
					></InputItem>
					<InputItem
						className="inputItem"
						editable="{true}"
						clear
						placeholder="密码"
						type="password"
						value={this.state.password}
						onChange={this.passwordChangeHandle}
					></InputItem>

          <Button type="primary" onClick={this.handleClick}>确认</Button>
				</div>			

        

			</div>
    )
  }
}