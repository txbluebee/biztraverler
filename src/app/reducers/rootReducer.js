import {combineReducers} from 'redux';
import { reducer as FormReducdr } from 'redux-form';
import communityReducer from '../../features/community/communityReducer.jsx';
import modalReducer from '../../features/modals/modalReducer';


const rootReducer = combineReducers({
  community: communityReducer,
  modals: modalReducer,
  form: FormReducdr
})

export default rootReducer;