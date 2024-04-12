import { useAppDispatch } from '../hooks';
import { changeCity } from '../store/action';
import { City } from '../types/city';

type CitiesListProps = {
  cities: City[];
};

type CityProps = {
  city: City;
  changeCityName: (city: City) => void;
};

const CityTab = ({ city, changeCityName }: CityProps): JSX.Element => (
  <li className="locations__item" onClick={() => changeCityName(city)}>
    <a className="locations__item-link tabs__item" href="#">
      <span>{city.name}</span>
    </a>
  </li>
);

function CitiesList({ cities }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <CityTab
          key={city.name}
          city={city}
          changeCityName={handleCityChange}
        />
      ))}
    </ul>
  );
}

export default CitiesList;
