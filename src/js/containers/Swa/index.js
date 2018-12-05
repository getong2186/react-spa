import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router';
import styles from './index.scss';

import { Nav, Header } from '../../components'

import * as TodoActions from '../../actions/TodoActions'

class Swa extends Component {
  state = {
    applist: [
      {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': true
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': true
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': true
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }, {
          "id": "d28d1640-69c5-4",
          "logoUrl": "http://ysp.redcore.cn/files/appiconlogos/5b041895e8152b75107a63b5/7d6ilrf3yxk.png",
          "name": "oa",
          'type': false
      }
    ]
  }

   // 用户item的点击事件
   swaListClick = (rowID) => {
      hashHistory.push({
        pathname: 'swaDetail',
        query: {
            'id' : rowID
        }
      });
  }

  render() {
    const { counter, dispatch, asyncBool, asyncCountDown } = this.props
    return (
      <div className="box relative">
        <Header />
        <div className="banner-pack">
        </div>
        <div className="swa-card-pack">
          {this.state.applist.map(app => (
            <div className="card">
              <div className="app">
                <img src={require(`./imgs/app-1.png`)} alt="" />
                <span>{app.name}</span>
              </div>
              <div className="setting">
                <div className="setting-not" onClick={this.swaListClick.bind(this, app.id)}>未配置</div>
                {/* <div v-show="app.type" className="setting-done">已配置</div> */}
              </div>
            </div>
          ))}
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
)(Swa)