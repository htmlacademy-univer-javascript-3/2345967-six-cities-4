import { Link } from 'react-router-dom';
import OfferList from '../components/offers-list';
import { Offer } from '../types/offer';
import { AppRoute, SortOption } from '../const';
import Map from '../components/map';
import CitiesList from '../components/cities-list';
import { CITIES_MOCK } from '../mocks/cities';
import { useAppSelector } from '../store/hooks/index';
import { useEffect, useState } from 'react';
import SortingOptions from '../components/sorting-options';

type MainPageProps = {
  offers: Offer[];
};

function getSortedOffers(offers: Offer[], sorting: SortOption): Offer[] {
  switch (sorting) {
    case SortOption.Popular:
      return offers;
    case SortOption.HighToLow:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortOption.LowToHigh:
      return offers.toSorted((a, b) => a.price - b.price);
    case SortOption.TopRated:
      return offers.toSorted((a, b) => b.rating - a.rating);
  }
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);

  const [currentCityOffers, setCurrentCityOffers] = useState<Offer[]>(offers);
  useEffect(() => {
    const filteredOffers = offers.filter((offer: Offer) => offer.city === currentCity);
    setCurrentCityOffers(filteredOffers);
  }, [currentCity, offers]);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{offers.filter((offer) => offer.isFavorite).length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={AppRoute.Login} className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CITIES_MOCK} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {currentCity.name}</b>
              <SortingOptions />
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={getSortedOffers(currentCityOffers, useAppSelector((state) => state.currentSort))} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={currentCityOffers.map((offer) => offer.point)} city={currentCity} selectedPoint={useAppSelector((state) => state.currentPoint)} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
