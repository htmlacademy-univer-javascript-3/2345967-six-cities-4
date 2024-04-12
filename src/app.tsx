import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageMain from './pages/main-page';
import LoginPage from './pages/login-page';
import { AppRoute, AuthStatus } from './const';
import OfferPage from './pages/offer-page';
import FavoritesPage from './pages/favorites-page';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/not-found-page';
import { Offer } from './types/offer';
import { useAppSelector, useAppDispatch } from './hooks';
import { setOffersList } from './store/action';

type AppProps = {
  authStatus: AuthStatus;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function App({ authStatus }: AppProps): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offersList);
  const dispatch = useAppDispatch();
  dispatch(setOffersList());
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<PageMain />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authStatus={AuthStatus.Auth}
            >
              <FavoritesPage
                offers = {offers.filter((offer) => offer.isFavorite)}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage offers={offers} />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
