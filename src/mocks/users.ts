import { User } from '../types/user';
import { AVATARS_MOCK } from './images';

export const USERS_MOCK: User[] = [
  {
    id: 1,
    name: 'Max',
    avatar: AVATARS_MOCK[0]
  },
  {
    id: 2,
    name: 'Angelina',
    avatar: AVATARS_MOCK[1]
  }
];
