import React, { Component }  from 'react';
import Header from 'components/Header';
import Counter from 'components/Counter';
import Footer from 'components/Footer';

class Main extends Component {
	render() {
		return (
			<div id="main-container">
				<Header title="React Starter Kit" />
				<Counter />
				<Footer title="Github" href="https://github.com/trembacz/react-redux-starter-kit#react-redux-starter-kit" />
			</div>
		);
	}
}

export default Main;
