import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { count } from 'actions/settings';

class Counter extends Component {
		static propTypes = {
			dispatch: PropTypes.func,
			settings: PropTypes.object
		};
		constructor() {
			super();
			this.handleCounterClick = this.handleCounterClick.bind(this);
		}
		handleCounterClick() {
			this.props.dispatch(count(this.props.settings.counter || 0));
		}
		render() {
			const { counter } = this.props.settings;
			return (
				<div className="counter-container">
					<h3 className="counter">Counter: {counter}</h3>
					<button className="slide-button blue" onClick={this.handleCounterClick}>Increase</button>
				</div>
			);
		}
}

const mapStateToProps = (state) => { return { ...state }; };
export default connect(mapStateToProps)(Counter);
