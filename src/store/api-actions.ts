import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute, AuthStatus, LoadingStatus } from '../const.tsx';
import { Offer } from '../types/offer.ts';
import { AxiosInstance } from 'axios';
import { Review } from '../types/rewiew.ts';
import { Dispatch } from '../types/state.ts';
import { loadOffers, setAuthStatus, setLoadingStatus, setUser } from './action.ts';
import { User } from '../types/user.ts';
import { deleteToken, setToken } from '../services/token.ts';


type ThunkApiConfig = {
  dispatch: Dispatch;
  extra: AxiosInstance;
};

type UserLogin = {
  email: string;
  password: string;
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

export const checkAuth = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(setAuthStatus(AuthStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthStatus.NoAuth));
    }
  }
);

export const login = createAsyncThunk<User, UserLogin, ThunkApiConfig>(
  'user/login',
  async (userLogin: UserLogin, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(ApiRoute.Login, userLogin);
    setToken(data.token);
    dispatch(setAuthStatus(AuthStatus.Auth));
    dispatch(setUser(data));
    return data;
  },
);

export const logout = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    deleteToken();
    dispatch(setAuthStatus(AuthStatus.NoAuth));
    dispatch(setUser(undefined));
  }
);
