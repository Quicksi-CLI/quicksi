import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers/index';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

const middleWare = [thunk, loggerMiddleware];

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleWare))
);
