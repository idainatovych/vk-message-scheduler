const defaultState = ['John Doe', 'Jane Doe'];

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
