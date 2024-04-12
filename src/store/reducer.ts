import { createReducer } from '@reduxjs/toolkit';
import { setOffersList, changeCity } from './action';
import { OFFERS_MOCK } from '../mocks/offers';
import { CITIES_MOCK } from '../mocks/cities';
import { Offer } from '../types/offer';
import { City } from '../types/city';

type StateType = {
  city: City;
  offersList: Offer[];
};

const initialState: StateType = {
  city: CITIES_MOCK[5],
  offersList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersList, (state) => {
      state.offersList = OFFERS_MOCK;
    });
});

export { reducer };
