import { FETCH_TRIPIT } from './userConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions'
import axios from 'axios';


export const loginLinkedin = () => 
  async dispatch => {
    try {
        
    } catch (error) {
      
    }
}



const ROOT_URL = "https://json-server-heroku-psqlxoinfr.now.sh/db"

export const fetchTripIt = () => 
  async dispatch => {
    try {
      dispatch(asyncActionStart())
      const TripitData = await axios.get(`${ROOT_URL}`)
      dispatch({
        type: FETCH_TRIPIT,
        payload: TripitData.data
      })
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }