import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageMain from './pages/main-page';
import LoginPage from './pages/login-page';
import { AppRoute, AuthStatus } from './const';
import OfferPage from './pages/offer-page';
import FavoritesPage from './pages/favorites-page';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/not-found-page';
import { Offer } from './types/offer';

type AppProps = {
  authStatus: AuthStatus;
  offers: Offer[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function App({ authStatus, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<PageMain offers = {offers} />}
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
                offers = {offers}
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
