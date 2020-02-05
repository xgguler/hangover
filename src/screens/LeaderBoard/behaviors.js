import { actionTypes } from '@utils/actionTypes';
import { CALL_API } from '@store/fanEngagementMiddleware';

export const leaderBoardLoadActions = actionTypes('LEADERBOARD_LOAD');

const initialState = {
  leaderBoardLoading: true,
  leaderBoardError: false,
  leaderBoardSuccess: false,
  leaderBoard: {},
};

// manage actions by their types.

export default function(state = initialState, action) {
  switch (action.type) {
    case leaderBoardLoadActions.BEGIN: {
      return {
        ...state,
        leaderBoardLoading: true,
        leaderBoardError: false,
        leaderBoardSuccess: false,
      };
    }
    case leaderBoardLoadActions.ERROR: {
      return {
        ...state,
        leaderBoardLoading: false,
        leaderBoardError: true,
        leaderBoardSuccess: false,
      };
    }
    case leaderBoardLoadActions.SUCCESS: {
      return {
        ...state,
        leaderBoard: action.response,
        leaderBoardLoading: false,
        leaderBoardError: false,
        leaderBoardSuccess: true,
      };
    }
    default:
      return state;
  }
}

/**
 * Action creators
 */
export function getLeaderBoard() {
  return dispatch => {
    return dispatch({
      [CALL_API]: {
        type: leaderBoardLoadActions,
        entity: '/rest/analytics/read/leaderboard/Entity.xsjs',
      },
    });
  };
}
