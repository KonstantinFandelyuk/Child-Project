import React from 'react';
import { observer } from 'mobx-react-lite';
import { StarsBlock } from './style';
import CatalogStore from '../../../../store/CatalogStore';

export const StartsChecked = observer(() => {
  const { getStarsValue } = CatalogStore;
  return (
    <StarsBlock>
      <input
        type="radio"
        id="star-5"
        name="rating"
        value="5"
        onChange={(e) => getStarsValue(e.target.value)}
      />
      <label htmlFor="star-5" title="Оценка «5»"></label>
      <input
        type="radio"
        id="star-4"
        name="rating"
        value="4"
        onChange={(e) => getStarsValue(e.target.value)}
      />
      <label htmlFor="star-4" title="Оценка «4»"></label>
      <input
        type="radio"
        id="star-3"
        name="rating"
        value="3"
        onChange={(e) => getStarsValue(e.target.value)}
      />
      <label htmlFor="star-3" title="Оценка «3»"></label>
      <input
        type="radio"
        id="star-2"
        name="rating"
        value="2"
        onChange={(e) => getStarsValue(e.target.value)}
      />
      <label htmlFor="star-2" title="Оценка «2»"></label>
      <input
        type="radio"
        id="star-1"
        name="rating"
        value="1"
        onChange={(e) => getStarsValue(e.target.value)}
      />
      <label htmlFor="star-1" title="Оценка «1»"></label>
    </StarsBlock>
  );
});
