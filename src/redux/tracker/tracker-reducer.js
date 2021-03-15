import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import trackerActions from './tracker-actions';

const trackerList = createReducer([], {
    [trackerActions.addTrackerSuccess]: (state, { payload }) => [...state, payload],
    [trackerActions.removeTrackerSuccess]: (state, { payload }) => 
        state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
    [trackerActions.addTrackerRequest]: () => true,
    [trackerActions.addTrackerSuccess]: () => false,
    [trackerActions.addTrackerError]: () => false,
    [trackerActions.removeTrackerRequest]: () => true,
    [trackerActions.removeTrackerSuccess]: () => false,
    [trackerActions.removeTrackerError]: () => false,
})

const error = createReducer(null, {
    [trackerActions.addTrackerError]: (_, { payload }) => payload,
    [trackerActions.removeTrackerError]: (_, { payload }) => payload,
});

export default combineReducers({
    trackerList,
    loading,
    error,
});
