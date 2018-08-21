import {combineReducers} from 'redux';
import communityReducer from '../../features/community/communityReducer';


const rootReducer = combineReducers({
  community: communityReducer
})

export default rootReducer;