import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss';

import { Nav, Header, Counter } from '../../components'
// import * as CounterActions from '../../actions/CounterActions'

class Homepage extends Component {
  state = {
    data: ['bg', 'bg', 'bg'],
    imgHeight: 176,
    grouplists: [
      {
          "applicationList": [
              {
                  "address": "http://www.yunshipei.com/index.html",
                  "id": "d28d1640-69c5-4",
                  "level": 1,
                  "logoUrl": "../../assets/imgs/index/app-1.png",
                  "name": "红芯官网",
                  "type": 1,
                  "isMarketApplication": false,
                  "isVisible": true
              }, {
                  "address": "http://www.yunshipei.com/index.html",
                  "id": "d28d1640-69c5-4",
                  "level": 1,
                  "logoUrl": "../../assets/imgs/index/app-1.png",
                  "name": "红芯官网",
                  "type": 1,
                  "isMarketApplication": false,
                  "isVisible": true
              }, {
                  "address": "http://www.yunshipei.com/index.html",
                  "id": "d28d1640-69c5-4",
                  "level": 1,
                  "logoUrl": "../../assets/imgs/index/app-1.png",
                  "name": "红芯官网",
                  "type": 1,
                  "isMarketApplication": false,
                  "isVisible": true
              }, {
                  "address": "http://www.yunshipei.com/index.html",
                  "id": "d28d1640-69c5-4",
                  "level": 1,
                  "logoUrl": "../../assets/imgs/index/app-1.png",
                  "name": "红芯官网",
                  "type": 1,
                  "isMarketApplication": false,
                  "isVisible": true
              }, {
                  "address": "http://www.yunshipei.com/index.html",
                  "id": "d28d1640-69c5-4",
                  "level": 1,
                  "logoUrl": "../../assets/imgs/index/app-1.png",
                  "name": "红芯官网",
                  "type": 1,
                  "isMarketApplication": false,
                  "isVisible": true
              }, {
                  "address": "http://www.yunshipei.com/index.html",
                  "id": "d28d1640-69c5-4",
                  "level": 1,
                  "logoUrl": "../../assets/imgs/index/app-1.png",
                  "name": "红芯官网",
                  "type": 1,
                  "isMarketApplication": false,
                  "isVisible": true
              }
          ],
          "id": "0d1f9d02-e788-11",
          "index": 1,
          "name": "默认应用组",
          "type": 1
      }, {
        "applicationList": [
            {
                "address": "http://www.yunshipei.com/index.html",
                "id": "d28d1640-69c5-4",
                "level": 1,
                "logoUrl": "../../assets/imgs/index/app-1.png",
                "name": "红芯官网红",
                "type": 1,
                "isMarketApplication": false,
                "isVisible": true
            }, {
                "address": "http://www.yunshipei.com/index.html",
                "id": "d28d1640-69c5-4",
                "level": 1,
                "logoUrl": "../../assets/imgs/index/app-1.png",
                "name": "红芯官网",
                "type": 1,
                "isMarketApplication": false,
                "isVisible": true
            }, {
                "address": "http://www.yunshipei.com/index.html",
                "id": "d28d1640-69c5-4",
                "level": 1,
                "logoUrl": "../../assets/imgs/index/app-1.png",
                "name": "红芯官网",
                "type": 1,
                "isMarketApplication": false,
                "isVisible": true
            }, {
                "address": "http://www.yunshipei.com/index.html",
                "id": "d28d1640-69c5-4",
                "level": 1,
                "logoUrl": "../../assets/imgs/index/app-1.png",
                "name": "红芯官网",
                "type": 1,
                "isMarketApplication": false,
                "isVisible": true
            }, {
                "address": "http://www.yunshipei.com/index.html",
                "id": "d28d1640-69c5-4",
                "level": 1,
                "logoUrl": "../../assets/imgs/index/app-1.png",
                "name": "红芯官网",
                "type": 1,
                "isMarketApplication": false,
                "isVisible": true
            }, {
                "address": "http://www.yunshipei.com/index.html",
                "id": "d28d1640-69c5-4",
                "level": 1,
                "logoUrl": "../../assets/imgs/index/app-1.png",
                "name": "红芯官网",
                "type": 1,
                "isMarketApplication": false,
                "isVisible": true
            }
        ],
        "id": "0d1f9d02-e788-11",
        "index": 1,
        "name": "默认应用组",
        "type": 1
    }
  ]
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['bg', 'bg', 'bg'],
      });
    }, 100);
  }

  render() {
    return (
      <div className="box">
        <Header />
        <div>
          <div className="homepage-banner">
            <WingBlank>
              <Carousel
                autoplay={true}
                infinite
                autoplayInterval={3000}
              >
                {this.state.data.map(val => (
                  <img
                    src={require(`./imgs/${val}.png`)}
                    alt="{{val}}"
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                ))}
              </Carousel>
            </WingBlank>
            <div className="card-pack">
              {this.state.grouplists.map(group => ( 
                  <div className="card">
                    <h3>{group.name}</h3>
                    <div className="linkitems">
                      {group.applicationList.map(app => (
                        <a className="linkitem">
                          <div className="linkitem-icon">
                            <img src={require(`./imgs/app-1.png`)} alt="icon"/>
                            <p>{app.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                </div>
                ))}
            </div>
          </div>
          
          {/* 占位符 */}
          <div style={{ height: "55px"}}></div>
        </div>
        <Nav />
      </div>
    )
  }
}

function select(state) {
  return {
    counter: state.counter,
    asyncBool: state.counterAsync.asyncBool,
    asyncCountDown: state.counterAsync.asyncCountDown
  }
}

export default connect(select)(Homepage)
