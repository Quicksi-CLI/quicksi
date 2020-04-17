import {GET_SAMPLE} from './constants';

export const getCustomers = () => dispatch => {
  return fetch('/api/sample')
    .then(res => res.json())
    .then(sample => dispatch({type: GET_SAMPLE, payload: samples}))
}
