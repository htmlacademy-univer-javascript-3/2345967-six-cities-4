import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, setCurrentCity, setCurrentSort, setCurrentPoint, setLoadingStatus } from './action';
import { CITIES_MOCK } from '../mocks/cities';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { LoadingStatus, SortOption } from '../const';
import { Point } from '../types/point';
import {} from './api-actions';

type StateType = {
  city: City;
  offersList: Offer[];
  currentSort: SortOption;
  loadingStatus: LoadingStatus;
  currentPoint?: Point;
};

const currentState: StateType = {
  city: CITIES_MOCK[5],
  offersList: [],
  currentSort: SortOption.Popular,
  loadingStatus: LoadingStatus.Success,
  currentPoint: undefined
};

const reducer = createReducer(currentState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.loadingStatus = action.payload;
    })
    .addCase(setCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(setCurrentPoint, (state, action) => {
      state.currentPoint = action.payload;
    });
});

export { reducer };
