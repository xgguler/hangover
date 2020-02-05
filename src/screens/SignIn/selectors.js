/*
  accept states as argument and return data that is derived from those states.
 */

export const isLoginSuccess = state => state.signin.loginSuccess;
export const isLoginError = state => state.signin.loginError;
export const isLoginStarted = state => state.signin.loginStarted;

export const getSession = state => state.signin.session;
export const getAvatar = state => state.signin.session.avatar;
export const getAccessToken = state => state.signin.session.accessToken;
export const getUsername = state => state.signin.session.username;
