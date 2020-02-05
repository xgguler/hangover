/*
  accept states as argument and return data that is derived from those states.
 */

export const isMatchesLoading = state => state.matches.matchesLoading;
export const isMatchesError = state => state.matches.matchesError;
export const isMatchesSuccess = state => state.matches.matchesSuccess;
export const getMatches = state => state.matches.matches;
