import * as types from './types';

export function count(counter) {
	return {
		type: types.COUNTER_UP,
		counter
	};
}
