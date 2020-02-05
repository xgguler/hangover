/*
  accept states as argument and return data that is derived from those states.
 */

export const isLeaderBoardLoading = state =>
  state.leaderBoard.leaderBoardLoading;
export const isLeaderBoardError = state => state.leaderBoard.leaderBoardError;
export const isLeaderBoardSuccess = state =>
  state.leaderBoard.leaderBoardSuccess;
export const getLeaderBoard = state => state.leaderBoard.leaderBoard;
