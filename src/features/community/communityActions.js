import { FETCH_USER_CONTACTS } from "./communityConstant"

export const fetchUserContacts = () => {
  return ({
    type: FETCH_USER_CONTACTS
  })
}