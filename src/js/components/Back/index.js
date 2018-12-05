import React, { Component } from 'react'
import './index.scss';

export default class Back extends React.Component {
  handleClick = () => {
    history.back();
  }

  render() {
    return (
      <a className="back" onClick={this.handleClick}>
        <span>
          返回
        </span>
      </a>
    )
  }
}


