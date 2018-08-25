import {combineReducers} from 'redux';
import { reducer as FormReducdr } from 'redux-form';
import communityReducer from '../../features/community/communityReducer.jsx';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';


const rootReducer = combineReducers({
  community: communityReducer,
  modals: modalReducer,
  form: FormReducdr,
  auth: authReducer,
  async: asyncReducer
})

export default rootReducer;