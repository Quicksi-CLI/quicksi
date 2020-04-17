import { combineReducers, createStore } from 'redux';
import { demoReducer } from './demo/reducer';
import { IDemoState } from './demo/types';

export interface IRootState {
    demo: IDemoState
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        demo: demoReducer
}));

export default store;