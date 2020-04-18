import {GET_SAMPLE} from './constants';

/**
 * This is a dummy demo API, and doesn't make any request
 * You have to update it to fit into your own taste
 */
export const getSample = () => dispatch => {
  return fetch('/api/sample')
    .then(res => res.json())
    .then(sample => dispatch({type: GET_SAMPLE, payload: sample}))
}
