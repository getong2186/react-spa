import React,{ Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from "./app.scss";
export default class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }
  render() {
    // const { children } =this.props;
    return  <ReactCSSTransitionGroup
                transitionName="transitionWrapper"
                component="div"
                className={style.transitionWrapper}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <div key={this.props.location.pathname}
                     style={{position:"absolute", width: "100%"}}>
                    {
                        this.props.children
                    }
                </div>
            </ReactCSSTransitionGroup>
  }
}