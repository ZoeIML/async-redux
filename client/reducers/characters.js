import {REQUEST_CHAR, RECEIVE_CHAR} from '../actions'

function characters (state = [], action) {
  switch (action.type) {
    // REQUEST_CHAR needed to clear state initially
    case REQUEST_CHAR:
      return state

    case RECEIVE_CHAR:
      return action.characters

    default:
      return state
  }
}

export default characters
