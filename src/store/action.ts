import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { SortOption } from '../const';
import { Point } from '../types/point';

export const setCurrentCity = createAction<City>('setCurrentCity');
export const setOffersList = createAction<Offer[]>('setOffersList');
export const setCurrentSort = createAction<SortOption>('setSortType');
export const setCurrentPoint = createAction<Point | undefined>('setSelectedPoint');
