import {combineReducers} from 'redux';
import { reducer as FormReducdr } from 'redux-form';
import communityReducer from '../../features/community/communityReducer.jsx';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';


const rootReducer = combineReducers({
  community: communityReducer,
  modals: modalReducer,
  form: FormReducdr,
  auth: authReducer
})

export default rootReducer;