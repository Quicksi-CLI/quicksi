import { Constants, IDemoState, DemoActions } from './types';

const init: IDemoState = {
    list: []
};
export function demoReducer(state: IDemoState = init, 
action: DemoActions): IDemoState {
    switch (action.type) {
        case Constants.ADD_ITEM:
            return { list: [...state.list, action.payload.item]};
        default:
            return state;
    }
}