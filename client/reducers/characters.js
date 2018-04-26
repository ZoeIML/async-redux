import {REQUEST_CHAR, RECEIVE_CHAR} from '../actions'

function characters (state = [], action) {
  switch (action.type) {
    case REQUEST_CHAR:
      return action.characters

    case RECEIVE_CHAR:
      return action.characters

    default:
      return state
  }
}

export default characters
