import { Review } from '../types/rewiew';
import { USERS_MOCK } from './users';

export const REVIEWS_MOCK: Review[] = [
  {
    id: 1,
    user: USERS_MOCK[0],
    rating: 5,
    text: 'Awesome place!',
    date: new Date('2024-02-23').getTime()
  },
  {
    id: 2,
    user: USERS_MOCK[0],
    rating: 1,
    text: 'Worst place and time I remember',
    date: new Date('2022-02-24').getTime()
  },
  {
    id: 3,
    user: USERS_MOCK[1],
    rating: 4,
    text: 'Good place to stand for a couple days!',
    date: new Date('2003-09-02').getTime()
  },
  {
    id: 4,
    user: USERS_MOCK[0],
    rating: 5,
    text: 'Another awesome place! Good time to visit!',
    date: new Date('2024-03-21').getTime()
  },
  {
    id: 5,
    user: USERS_MOCK[1],
    rating: 3,
    text: 'Meh...',
    date: new Date('2023-12-31').getTime()
  }
];
