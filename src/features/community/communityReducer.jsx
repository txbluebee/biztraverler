import { createReducer } from '../../app/common/util/reducerUtil';
import { FETCH_USER_CONTACTS, FETCH_NEARBY } from './communityConstant';

const initialState = {}

const fetchConnections = (state, payload) => {
  return payload
}

export default createReducer(initialState, {
  [FETCH_USER_CONTACTS]: fetchConnections
})