import React, { Component } from 'react'
import './index.scss';
import { Icon, Grid } from 'antd-mobile';


export default class Back extends React.Component {
  handleClick = () => {
    history.back();
  }

  render() {
    return (
      <a className="back" onClick={this.handleClick}>
        <span>
          返回
          {/* <Icon type="search" /> */}
          {/* <Icon type="arrow-down" /> */}
        </span>
      </a>
    )
  }
}


