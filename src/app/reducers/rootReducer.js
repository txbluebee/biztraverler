import {combineReducers} from 'redux';
import { reducer as FormReducdr } from 'redux-form';
import communityReducer from '../../features/community/communityReducer.jsx';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
import userReducer from '../../features/user/userReducer';


const rootReducer = combineReducers({
  community: communityReducer,
  modals: modalReducer,
  form: FormReducdr,
  auth: authReducer,
  async: asyncReducer,
  user: userReducer
})

export default rootReducer;