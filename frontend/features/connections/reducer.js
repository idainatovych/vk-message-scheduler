import { List }  from 'immutable';

const defaultState = List(['John Doe', 'Jane Doe']);

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
