import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

export function configureStore() {
	const shouldDisplayReduxDispatch = process.env.NODE_ENV === 'development' ? true : false;
	const composeEnhancers =
				window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
					window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ features: { dispatch: shouldDisplayReduxDispatch }})
					: compose;

	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

	if (module.hot) {
		module.hot.accept('reducers', () => {
			const nextRootReducer = rootReducer;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
