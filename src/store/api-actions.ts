import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute, LoadingStatus } from '../const.tsx';
import { Offer } from '../types/offer.ts';
import { AxiosInstance } from 'axios';
import { Review } from '../types/rewiew.ts';
import { Dispatch } from '../types/state.ts';
import { loadOffers, setLoadingStatus } from './action.ts';


type ThunkApiConfig = {
  dispatch: Dispatch;
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<Offer[], undefined, ThunkApiConfig>(
  'fetchOffers',
  async (_arg, {extra: api, dispatch}) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setLoadingStatus(LoadingStatus.Success));
    dispatch(loadOffers(data));
    return data;
  }
);

export const fetchOffer = createAsyncThunk<Offer, Offer['id'], ThunkApiConfig>(
  'fetchOffer',
  async (offerId, {extra: api, dispatch}) => {
    dispatch(setLoadingStatus(LoadingStatus.Pending));
    const {data: offer} = await api.get<Offer>(`${ApiRoute.Offers}/${offerId}`);
    const {data: reviews} = await api.get<Review[]>(`${ApiRoute.Reviews}/${offerId}`);
    const {data: nearby} = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}/nearby`);
    offer.reviews = reviews;
    offer.nearby = nearby;
    dispatch(setLoadingStatus(LoadingStatus.Success));
    return offer;
  }
);

// For future module tasks

// export const fetchFavourites = createAsyncThunk<Offer[], undefined, ThunkApiConfig>(
//   'fetchFavorites',
//   async (_arg, {extra: api, dispatch}) => {
//     const {data} = await api.get<Offer[]>(ApiRoute.Favourites, { 'headers': { 'X-Token': dispatch() } });
//     return data;
//   }
// );
