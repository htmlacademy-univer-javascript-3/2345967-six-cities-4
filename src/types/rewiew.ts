import { User } from './user';

export type Review = {
  id: number;
  user: User;
  rating: number;
  date: number;
  text: string;
}
