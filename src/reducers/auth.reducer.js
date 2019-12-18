const defaultState = {
  authenticated: false,
  isLoggedIn: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_AUTH_STATUS':
      return { ...state, authenticated: action.authenticated };
    case 'SIGNING_IN':
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      return { ...state };
  }
};
