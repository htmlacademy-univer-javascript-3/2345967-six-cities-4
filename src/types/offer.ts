import { Review } from './rewiew';
import { Image } from './image';
import { Point } from './point';
import { City } from './city';

export type Offer = {
  id: number;
  city: City;
  price: number;
  name: string;
  rating: number;
  reviews: Review[];
  isFavorite: boolean;
  isPremium: boolean;
  photos: Image[];
  description: string;
  point: Point;
}
