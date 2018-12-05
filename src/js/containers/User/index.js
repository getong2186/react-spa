import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './index.scss';

import { Nav, Header } from '../../components'

import * as TodoActions from '../../actions/TodoActions'

class User extends Component {
 
  render() {
    const { counter, dispatch, asyncBool, asyncCountDown } = this.props
    return (
      <div className="box relative">
        <Header />
        <div className="banner-pack">
        </div>
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
        <div className="user-card-pack">
          <div className="card">
            <div className="app">
              <img src={require(`./imgs/app-1.png`)} alt=""/>
              <span>项目管理</span>
            </div>
            <div className="setting">
              <div className="setting-done"></div>
            </div>
          </div>
          <div className="card">
            <div className="app">
              <img src={require(`./imgs/app-1.png`)} alt=""/>
              <span>项目管理</span>
            </div>
            <div className="setting">
              <div className="setting-done"></div>
            </div>
          </div>
        </div>
        <Nav/>
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