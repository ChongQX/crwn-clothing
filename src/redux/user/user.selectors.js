import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    //can be passed in as select1,select2 or [select1,select2]
    //fx can be (select1,select2) => ...
    [selectUser],
    user => user.currentUser
);