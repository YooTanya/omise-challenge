import { createSelector } from 'reselect';

export const getCharitiesState = (state) => state.charities;

export const getCurrency = createSelector([getCharitiesState], (state) => state.charities[0]?.currency);