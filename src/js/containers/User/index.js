import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import './index.scss';
import { List } from 'antd-mobile';

const Item = List.Item;

import { Nav, Header } from '../../components'

import * as TodoActions from '../../actions/TodoActions'

class User extends Component {
  handleClick = () => {
    const path = `/userPersonalCenter`
    hashHistory.push(path);
  }

  render() {
    return (
      <div className="user">
        <Header />
        <div className="banner-pack">
        </div>
        <div className="person" onClick={this.handleClick}>
          <img src={require(`./imgs/app-1.png`)} alt="" />
          <div className="message">
            <h3>李文星</h3>
            <p>
              职位：
                <span>UI设计师</span>
            </p>
          </div>
        </div>
        <div className="user-card-pack">
          <List className="my-list">
            <Item arrow="horizontal" onClick={() => { }}>
              <img src={require(`./imgs/icon_mine_securit.png`)} alt="" />
              <span>安全设置</span>
            </Item>
            <Item arrow="horizontal" onClick={() => { const path = `/userDevice`; hashHistory.push(path); }}>
              <img src={require(`./imgs/icon_mine_device.png`)} alt="" />
              <span>设备管理</span>
            </Item>
          </List>
        </div>
        <Nav />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  showCongratulation: state.showCongratulation
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)