import 'es6-symbol/implement';
import axios from 'axios';

import {
  FAN_ENGAGEMENT_API_URL,
  FAN_ENGAGEMENT_API_REQUEST_TIMEOUT,
} from 'react-native-dotenv';

import { getSession } from '@screens/SignIn/selectors';

// fan engagement api axios object
const fanEngagementAPI = axios.create({
  baseURL: FAN_ENGAGEMENT_API_URL,
  timeout: FAN_ENGAGEMENT_API_REQUEST_TIMEOUT,
});

export const api = fanEngagementAPI;

export const getMethod = (method = 'get') => {
  switch (method) {
    case 'post':
      return { httpMethod: fanEngagementAPI.post, hasData: true };
    default:
      return { httpMethod: fanEngagementAPI.get, hasData: false };
  }
};

export const callApi = async (
  store,
  entity,
  method = 'get',
  data = undefined
) => {
  // execute api call
  try {
    // decide which method will be used
    const { httpMethod, hasData } = getMethod(method);

    // get session from related state
    const session = getSession(store.getState());

    // set http request config parameters
    const config = {
      timeout: FAN_ENGAGEMENT_API_REQUEST_TIMEOUT,
      headers: {
        'Accept': 'application/json',
        'Fan-Engagement-User': session.username,

        // Authorization service will be used in production environment
        // We are using custom authorization service for POC
        // Authorization: 'Bearer ' + session.accessToken,
      },
    };

    const response = await httpMethod(
      entity,
      hasData ? data : config,
      hasData ? config : undefined
    );

    return response.data;
  } catch (err) {
    return Promise.reject(JSON.stringify(err));
  }
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

export default store => next => action => {
  // get action signature
  const callAPI = action[CALL_API];

  // check action signature is for api calls
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  // get type entity and params of api call action
  const { type, entity, method, data, params = {} } = callAPI;

  // check entity is string
  if (typeof entity !== 'string') {
    throw new Error('Specify a string entity.');
  }

  // get keys of action type
  const keys = Object.keys(type);

  // check number of keys is less than four
  if (Array.isArray(keys) == false || keys.length !== 4) {
    throw new Error('Expected an array of three action type.');
  }

  // check every action type is string
  if (keys.every(type => typeof type === 'string') == false) {
    throw new Error('Expected action type to be strings.');
  }

  // define action execution
  function actionWith(actionData) {
    const finalAction = Object.assign({}, action, actionData);
    delete finalAction[CALL_API];
    return finalAction;
  }

  // set action object state to begin
  next(actionWith({ type: type.BEGIN, ...params }));

  // execute api call and return
  return callApi(store, entity, method, data).then(
    response =>
      next(
        actionWith({
          response,
          type: type.SUCCESS,
          ...params,
        })
      ),
    error =>
      next(
        actionWith({
          type: type.ERROR,
          error: JSON.parse(error) || 'Something bad happened',
          ...params,
        })
      )
  );
};
