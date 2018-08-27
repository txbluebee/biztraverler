import { FETCH_TRIPIT } from './userConstants';
import { createReducer } from '../../app/common/util/reducerUtil';

const initialState = {
}

export const fetchTripItData = (state, payload) => {
  return payload;
}

export default createReducer(initialState, {
  [FETCH_TRIPIT]: fetchTripItData
})