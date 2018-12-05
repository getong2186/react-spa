import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { Popover, NavBar, Icon } from 'antd-mobile';
import './index.scss';
const Item = Popover.Item;

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: false, title: '首页', fontSize: '26px' };
    switch(hashHistory.getCurrentLocation().pathname) {
      case '/homepage':
        this.state.title = '首页';
        break;
      case '/swa':
        this.state.title = '密码管家'; 
        break;
      case '/user':
        this.state.title = '我的';
        break;
    } 
  };

  onSelect = (opt) => {
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
    if (opt.props.value == 'search') {
      let path = `/homepageSearch`
		  hashHistory.push(path);
    }
  };
  
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  scrollHandler = this.handleScroll.bind(this);
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }
  
  handleScroll(event) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var bannerElement = document.getElementById("banner");
    // var tittleElement = document.getElementById("tittle");
    bannerElement.style.opacity = scrollTop/100;
    if (scrollTop > 100) {
      this.setState({
        fontSize: '16px'
      });
    } else {
      this.setState({
        fontSize: '26px'
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar
        mode="light"
        className="header"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="search">
                <span className="search"></span>
                <span>搜索</span>
                </Item>),
              (<Item key="5" value="scan">
                <span className="scan"></span>
                <span>扫一扫</span>
              </Item>),
              (<Item key="6" value="apps">
                <span className="apps"></span>
                <span>应用管理</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
            <span type="ellipsis" style={{display: hashHistory.getCurrentLocation().pathname == '/homepage'? 'block' : 'none'}}>
              <img className="add" src={require(`./imgs/index-add.png`)} alt="icon"/>
            </span>
            </div>
          </Popover>
        }
      >
        <span style={{
              fontSize: this.state.fontSize
            }}>{this.state.title}</span>
      </NavBar>
      {/* header 背景图  */}
      <div className="banner" id="banner"></div>
      </div>
    )
  }
}


