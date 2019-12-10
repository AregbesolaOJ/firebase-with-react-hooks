import { UPDATE_AUTH_STATUS, SIGNING_IN } from './types';

export const updateAuthStatus = state => dispatch => {
  dispatch(updateAuth(state));
};

export const loadingSignIn = state => dispatch => {
  dispatch(signingIn(state));
};

function updateAuth(authState) {
  return { type: UPDATE_AUTH_STATUS, authState };
}

function signingIn(loadingState) {
  return { type: SIGNING_IN, loadingState };
}
