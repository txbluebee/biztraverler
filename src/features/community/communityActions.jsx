import { FETCH_USER_CONTACTS } from "./communityConstant";
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockApi';


// export const fetchUserContacts = (data) => {
//   return ({
//     type: FETCH_USER_CONTACTS,
//     payload: data
//   })
// }

export const fetchUserContacts = () => 
  async dispatch => {
    try {
      dispatch(asyncActionStart())
      let connectionData = await fetchSampleData()
      dispatch({type: FETCH_USER_CONTACTS, payload: connectionData})
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError())
    }
  }