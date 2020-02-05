/*
  accept states as argument and return data that is derived from those states.
 */

export const isAnalyticsLoading = state => state.analytics.analyticsLoading;
export const isAnalyticsError = state => state.analytics.analyticsError;
export const isAnalyticsSuccess = state => state.analytics.analyticsSuccess;
export const getAnalytics = state => state.analytics.analytics;
