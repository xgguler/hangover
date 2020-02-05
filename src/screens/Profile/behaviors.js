import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

export const profileLoadActions = actionTypes('PROFILE_LOAD');

const initialState = {
  profileLoading: false,
  profileError: false,
  profileSuccess: false,
  profile: {},
};

// manage actions by their types.

export default function(state = initialState, action) {
  switch (action.type) {
    case profileLoadActions.BEGIN: {
      return {
        ...state,
        profileLoading: true,
        profileError: false,
        profileSuccess: false,
      };
    }
    case profileLoadActions.ERROR: {
      return {
        ...state,
        profileLoading: false,
        profileError: true,
        profileSuccess: false,
      };
    }
    case profileLoadActions.SUCCESS: {
      return {
        ...state,
        profile: action.response,
        profileLoading: false,
        profileError: false,
        profileSuccess: true,
      };
    }
    default:
      return state;
  }
}

/**
 * Action creators
 */
export function getProfile() {
  return dispatch => {
    return dispatch({
      [CALL_API]: {
        type: profileLoadActions,
        entity: '/rest/analytics/read/user-analytic/Entity.xsjs',
      },
    });
  };
}
