import React, { Component } from 'react'
import { Back } from '../../../components'
import { List } from 'antd-mobile';
import { hashHistory } from 'react-router'

// 第三方组件和自己封装组件
import { Button, InputItem, Toast } from 'antd-mobile';

import './index.scss';

const Item = List.Item;

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
						<Item onClick={this.handleClick} extra={'>'}>修改密码</Item>
					</List>
				</div>


			</div>
    )
  }
}