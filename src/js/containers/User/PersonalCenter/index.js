import React, { Component } from 'react'
import { Back } from '../../../components'
import { hashHistory } from 'react-router'

import { List, Modal, Button, Toast} from 'antd-mobile';

import './index.scss';

const Item = List.Item;

const alert = Modal.alert;

const showAlert = () => {
	const alertInstance = alert('', '确认安全退出吗？', [
	  { text: '取消', onPress: () => {
		  console.log('取消');
	  }, style: 'default' },
	  { text: '确认', onPress: () => {
		  console.log('确认');
	  } },
	]);
	// setTimeout(() => {
	//   // 可以调用close方法以在外部close
	//   console.log('auto close');
	//   alertInstance.close();
	// }, 500000);
  };

export default class Detail extends Component {
	handleClick = () => {
		console.log(11111);
    const path = `/userChangePassword`
		hashHistory.push(path);
  }
 

  render() {
  

    return (
      <div className="personal-center">
				<Back/>
				<header>
					个人中心
				</header>

				<div className="person-pack">
					{/*  */}
					<div className="person">
							<img src={require(`./imgs/app-1.png`)} alt=""/>
							<div className="message">
								<h3>李文星</h3>
								<p>
									职位：
									<span>UI设计师</span>
								</p>
							</div>
					</div>
					<div className="head-portrait">
						更换头像>
					</div>
				</div>

				<div className="person-message">
					<List>
						<Item extra={'18840822186'}>电话</Item>
					</List>
					<List className="list-email">
						<Item extra={'tong.ge@redcore.cn'}>邮箱</Item>
					</List>

					<List className="change-password">
						<Item arrow="horizontal" onClick={this.handleClick}>
							<span>修改密码</span>
						</Item>
					</List>
				</div>

				<footer>
					<List className="my-list signOut">
						<Item onClick={showAlert}>
						<span>退出当前账号</span>
						</Item>
					</List>
				</footer>
			</div>
    )
  }
}