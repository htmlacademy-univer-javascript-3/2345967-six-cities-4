import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const setCurrentCity = createAction<City>('setCurrentCity');
export const setOffersList = createAction<Offer[]>('setOffersList');
