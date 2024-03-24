import { Review } from './rewiew';
import { Image } from './image';

export type Offer = {
  id: number;
  city: string;
  price: number;
  name: string;
  rating: number;
  reviews: Review[];
  isFavorite: boolean;
  isPremium: boolean;
  photos: Image[];
  description: string;
}
