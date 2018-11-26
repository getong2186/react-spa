import React, { Component } from 'react'
import { Nav, Timer } from 'app/components'
// import { Header } from 'app/components/Todos/Header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TimerActions from 'app/actions/TimerActions'

class Login extends Component {
	render() {
		const { state, actions } = this.props
		return (
      <div className="box">
	  	{/* <Header/> */}
        <Timer {...state} {...actions} />
        {/* <Nav/> */}
      </div>
		)
	}
}

const mapStateToProps = state => ({
	state: state.timer
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TimerActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)