import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type DemoActions = ActionType<typeof actions>;

export interface IDemoState {
    list: string[]
}

export enum Constants {
    ADD_ITEM = 'ADD_ITEM'
}
