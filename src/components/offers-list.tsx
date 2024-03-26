import { useState } from 'react';
import { Offer } from '../types/offer';
import Card from './card/card';

type OfferListProps = {
  offers: Offer[];
};

function OfferList({offers}: OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState<number | undefined>(undefined);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onMouseEnter={setActiveOfferId}/>
      ))}
    </div>
  );
}
export default OfferList;
