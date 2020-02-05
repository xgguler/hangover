/*
To manage all of actions in switch case block,
add prefix to main three type of action.
 */

export const actionTypes = prefix => {
  return {
    BEGIN: `${prefix}_BEGIN`,
    SUCCESS: `${prefix}_SUCCESS`,
    ERROR: `${prefix}_ERROR`,
    prefix,
  };
};
