import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

export const matchesLoadActions = actionTypes('MATCHES_LOAD');

const initialState = {
  matchesLoading: true,
  matchesError: false,
  matchesSuccess: false,
  matches: {},
};

// manage actions by their types.

export default function(state = initialState, action) {
  switch (action.type) {
    case matchesLoadActions.BEGIN: {
      return {
        ...state,
        matchesLoading: true,
        matchesError: false,
        matchesSuccess: false,
      };
    }
    case matchesLoadActions.ERROR: {
      return {
        ...state,
        matchesLoading: false,
        matchesError: true,
        matchesSuccess: false,
      };
    }
    case matchesLoadActions.SUCCESS: {
      return {
        ...state,
        matches: action.response,
        matchesLoading: false,
        matchesError: false,
        matchesSuccess: true,
      };
    }
    default:
      return state;
  }
}

/**
 * Action creators
 */

// return a function that contains an array which contains the endpoint and action type.
export function getMatches() {
  return dispatch => {
    return dispatch({
      [CALL_API]: {
        type: matchesLoadActions,
        entity: '/rest/matches/read/Entity.xsjs',
      },
    });
  };
}
