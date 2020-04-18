import {GET_SAMPLE} from '../actions/constants'

const sampleReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_SAMPLE:
        return payload
      default:
        return state
    }
}

export default sampleReducer;
