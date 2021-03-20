import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CatalogStore from '../../../../store/CatalogStore';
import { converUrl, hidePhoneNumber } from '../../../helpers/helpers';
import {
  Item,
  Name,
  Rating,
  Descriptions,
  CompanyImage,
  Phone,
  ShowPhone,
  PhoneBlock,
} from './style';

export const CatalogItem = ({ item }) => {
  const [showNumber, setShowNumber] = useState(true);
  const { getCurrentcatalogItem } = CatalogStore;
  const {
    objectId,
    companyRating,
    companyTags,
    companyName,
    companyFeedback,
    companyPhone,
    companyPhoto,
    companyAbout,
  } = item;

  const handlerOpenLink = () => {
    sessionStorage.setItem('catalog', objectId);
    getCurrentcatalogItem(objectId);
  };

  return (
    <Item onClick={(e) => handlerOpenLink()}>
      <Link to={`/catalog/company/${converUrl(companyName)}`}>
        <Name>{companyName}</Name>
        <Rating>⭐{companyRating} </Rating>
        <Descriptions>{companyAbout}</Descriptions>
        <CompanyImage src={companyPhoto} alt="" />{' '}
      </Link>
      <PhoneBlock>
        <Phone> {showNumber ? hidePhoneNumber(companyPhone) : companyPhone} </Phone>
        <ShowPhone type="button" onClick={(e) => setShowNumber(!showNumber)}>
          {showNumber ? 'Показать телефон' : 'Скрыть телефон'}
        </ShowPhone>
      </PhoneBlock>
    </Item>
  );
};
