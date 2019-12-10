import { UPDATE_AUTH_STATUS, SIGNING_IN } from '../actions/types';

const defaultState = {
  authState: false,
  loadingSignIn: false
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.user };
    case 'setAuthData':
      return { ...state, authData: action.authData };
    case UPDATE_AUTH_STATUS:
      return { ...state, authState: action.authState };
    case SIGNING_IN:
      return { ...state, loadingSignIn: action.loadingState };
    default:
      return { ...state };
  }
};
