import { createReducer } from '@reduxjs/toolkit';
import { setOffersList, setCurrentCity, setCurrentSort, setCurrentPoint } from './action';
import { OFFERS_MOCK } from '../mocks/offers';
import { CITIES_MOCK } from '../mocks/cities';
import { Offer } from '../types/offer';
import { City } from '../types/city';
import { SortOption } from '../const';
import { Point } from '../types/point';

type StateType = {
  city: City;
  offersList: Offer[];
  currentSort: SortOption;
  currentPoint?: Point;
};

const currentState: StateType = {
  city: CITIES_MOCK[5],
  offersList: [],
  currentSort: SortOption.Popular,
  currentPoint: undefined
};

const reducer = createReducer(currentState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersList, (state) => {
      state.offersList = OFFERS_MOCK;
    })
    .addCase(setCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(setCurrentPoint, (state, action) => {
      state.currentPoint = action.payload;
    });
});

export { reducer };
