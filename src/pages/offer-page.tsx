import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Offer } from '../types/offer';
import ReviewForm from '../components/review-form';
import ReviewList from '../components/review-list';
import Map from '../components/map';
import OfferList from '../components/offers-list';
import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import Header from '../components/header';

function OfferPage(): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offersList);
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [pathname]);

  const selectedOffer = offers.find((offer) => offer.id === id);

  if (!selectedOffer) {
    navigate('/404');
    return <div>Offer not found</div>;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {selectedOffer.images?.map((item) => (
                <div key={item.src} className="offer__image-wrapper">
                  <img className="offer__image" src={item.src} alt={item.alt}/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {selectedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {selectedOffer.title}
                </h1>
                <button className={`offer__bookmark-button button ${selectedOffer.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${selectedOffer.rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{selectedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {selectedOffer.description}
                  </p>
                </div>
              </div>
              {selectedOffer.reviews &&
              (
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{selectedOffer.reviews.length}</span></h2>
                  <ReviewList reviews={selectedOffer.reviews} />
                </section>
              )}
              <ReviewForm />
            </div>
          </div>
          <section className="offer__map map">
            <Map city={selectedOffer.city} points={(selectedOffer.nearby) ? selectedOffer.nearby.map((offer) => offer.location) : []} selectedPoint={selectedOffer.location} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={selectedOffer.nearby ? selectedOffer.nearby : []} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
