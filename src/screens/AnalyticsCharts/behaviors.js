import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

export const analyticsLoadActions = actionTypes('ANALYTICS_LOAD');

const initialState = {
  analyticsLoading: false,
  analyticsError: false,
  analyticsSuccess: false,
  analytics: {},
};

// manage actions by their types.

export default function(state = initialState, action) {
  switch (action.type) {
    case analyticsLoadActions.BEGIN: {
      return {
        ...state,
        analyticsLoading: true,
        analyticsError: false,
        analyticsSuccess: false,
      };
    }
    case analyticsLoadActions.ERROR: {
      return {
        ...state,
        analyticsLoading: false,
        analyticsError: true,
        analyticsSuccess: false,
      };
    }
    case analyticsLoadActions.SUCCESS: {
      return {
        ...state,
        analytics: action.response,
        analyticsLoading: false,
        analyticsError: false,
        analyticsSuccess: true,
      };
    }
    default:
      return state;
  }
}

/**
 * Action creators
 */
export function getAnalytics() {
  return dispatch => {
    return dispatch({
      [CALL_API]: {
        type: analyticsLoadActions,
        entity: '/rest/analytics/read/team-diversity-and-question/Entity.xsjs',
      },
    });
  };
}
