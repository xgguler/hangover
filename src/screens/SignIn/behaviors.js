import { api } from '@store/fanEngagementMiddleware';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

// define states as false initially.
const initialState = {
  loginStarted: false,
  loginSuccess: false,
  loginError: false,
};

// manage actions by their types.

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STARTED: {
      return {
        ...state,
        loginStarted: true,
        loginSuccess: false,
        loginError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        session: action.response,
        loginStarted: false,
        loginSuccess: true,
        loginError: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginStarted: false,
        loginSuccess: false,
        loginError: true,
      };
    }
    default:
      return state;
  }
}

/**
 * Action creators
 */
export function doLogin(username, password, onLoginSuccess) {
  return dispatch => {
    // dispatch login started state
    dispatch({ type: LOGIN_STARTED });

    // authentication request headers
    const authRequestConfig = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const requestBody = {
      Username: username,
      Password: password,
    };

    return (
      api
        .post('/rest/user/auth/Entity.xsjs', requestBody, authRequestConfig)

        // execute api call
        .then(response => {
          // define session state
          let session = {
            userId: response.data.USER_ID,
            username: response.data.USERNAME,
            fullname: response.data.FULL_NAME,
            accessToken: response.data.ACCESS_TOKEN,
            avatar: response.data.AVATAR,
          };

          // dispatch successfull login state
          dispatch({ type: LOGIN_SUCCESS, response: session });

          // call successfull login
          onLoginSuccess();
        })

        // api call error handling
        .catch(e => {
          // dispatch login error state
          dispatch({ type: LOGIN_ERROR });
        })
    );
  };
}
