import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

type CardProps = {
  offer: Offer;
  onMouseEnter: Dispatch<SetStateAction<number | undefined>>;
}
function Card({offer, onMouseEnter}: CardProps): JSX.Element {
  return (
    <article className="cities__card place-card" onMouseEnter={() => onMouseEnter(offer.id)}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.photos[0].src} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>
            {offer.name}
          </Link>
        </h2>
        <p className="place-card__type">Room</p>
      </div>
    </article>
  );
}

export default Card;
