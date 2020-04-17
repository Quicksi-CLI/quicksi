import React from 'react';
import Main from 'containers/Main';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'store/configureStore';

const store = configureStore();
const mainElem = document.getElementById('app');

if (mainElem) {
	render(
		<Provider store={store}>
			<Main />
		</Provider>,
		document.getElementById('app')
	);
}

if (module.hot) {
	module.hot.accept('containers/Main', () => {
		const NewRoot = require('containers/Main').default;
		render(
			<Provider store={store}>
				<NewRoot store={store} />
			</Provider>,
			document.getElementById('app')
		);
	});
}
