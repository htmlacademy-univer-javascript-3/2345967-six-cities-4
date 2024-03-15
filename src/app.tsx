import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageMain from './pages/main-page';
import LoginPage from './pages/login-page';
import { AppRoute, AuthStatus } from './const';
import OfferPage from './pages/offer-page';
import FavoritesPage from './pages/favorites-page';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/not-found-page';

type AppProps = {
  placesCount: number;
  authStatus: AuthStatus;
};

function App(props: AppProps): JSX.Element {
  const { placesCount, authStatus } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<PageMain placesCount={placesCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authStatus={authStatus}
            >
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage />}
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
