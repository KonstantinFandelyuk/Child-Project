import React, { useState, useEffect } from 'react';
import { StarsRating, StarsImage } from './style';
import EmptyImage from '../../../../images/elements/stars/empty.svg';
import CompleteImage from '../../../../images/elements/stars/complete.svg';
import { observer } from 'mobx-react-lite';
const shortid = require('shortid');

export const Stars = observer(({ value, sizeImage }) => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    function handlerStars(value) {
      let result = [];
      for (let i = 0; i < 5; i++) {
        if (i < value) {
          result.push(CompleteImage);
        } else {
          result.push(EmptyImage);
        }
      }
      return result;
    }
    setImgs(handlerStars(value));
  }, [value]);

  return (
    <StarsRating data-value={` / ${value}`}>
      {imgs.map((img) => (
        <StarsImage src={img} sizeImage={sizeImage} key={shortid.generate()} />
      ))}
    </StarsRating>
  );
});
