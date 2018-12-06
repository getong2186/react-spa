import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { hashHistory } from 'react-router'
import { Back } from '../../../components'

// 逻辑和redux业务功能
// import * as TimerActions from 'app/actions/TimerActions'

// 第三方组件和自己封装组件
import { Button, InputItem } from 'antd-mobile';

// 样式
import './index.scss'

// 引入API
// import API from './service.js'

class Search extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			keyWord: ''
		}
	}
	keyWordChangeHandle = (value) => {
		this.setState({
            keyWord: value
		})
	}

	componentDidMount() {
		this.refs.myInput.refs.input.focus();
	}
	
	render() {
		return (
			<div className="homepage-search">
				<Back/>
				<header>
					<InputItem
						editable="{true}"
						clear
						placeholder="搜索应用名称或输入网址"
						value={this.state.keyWord}
						onChange={this.keyWordChangeHandle}
						ref="myInput"
					></InputItem>
				</header>
			</div>
		)
	}
}

export default connect(
)(Search)