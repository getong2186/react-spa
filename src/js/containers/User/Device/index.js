import React, { Component } from 'react'
import { Back } from '../../../components'
// import { hashHistory } from 'react-router'

import { List, Modal, Button, Toast} from 'antd-mobile';

import './index.scss';

const Item = List.Item;
const Brief = Item.Brief;

export default class Detail extends Component {
  render() {
    return (
      <div className="user-device">
				<Back/>
				<header>
					设备管理
				</header>
				<div className="device-pack">
					<List className="my-list">
						<Item extra="版本 1.4.1" align="top" thumb={require(`./imgs/icon_mine_device_PC.png`)} multipleLine>
							<h3>LIWENXING</h3>
							<Brief>iPhone 8 Plus-iOS 12.4</Brief>
							<Brief>设备ID: 648763FB-F789-FDS7-FJIL8DU8IUYE</Brief>
						</Item>
						<Item extra="版本 1.4.1" align="top" thumb={require(`./imgs/icon_mine_device_PC.png`)} multipleLine>
							<h3>LIWENXING</h3> 
							<Brief>iPhone 8 Plus-iOS 12.4</Brief>
							<Brief>设备ID: 648763FB-F789-FDS7-FJIL8DU8IUYE</Brief>
						</Item>
						<Item extra="版本 1.4.1" align="top" thumb={require(`./imgs/icon_mine_device_PC.png`)} multipleLine>
							<h3>LIWENXING</h3> 
							<Brief>iPhone 8 Plus-iOS 12.4</Brief>
							<Brief>设备ID: 648763FB-F789-FDS7-FJIL8DU8IUYE</Brief>
						</Item>
					</List>
				</div>
			</div>
    )
  }
}