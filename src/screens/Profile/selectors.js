/*
  accept states as argument and return data that is derived from those states.
 */

export const isProfileLoading = state => state.profile.profileLoading;
export const isProfileError = state => state.profile.profileError;
export const isProfileSuccess = state => state.profile.profileSuccess;
export const getProfile = state => state.profile.profile;
