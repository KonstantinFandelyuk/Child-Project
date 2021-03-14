import React from 'react';
import { Link } from 'react-router-dom';
import CatalogStore from '../../../../store/CatalogStore';
import { converUrl } from '../../../helpers/helpers';
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
        <CompanyImage src={companyPhoto} alt="" />
        <PhoneBlock>
          <Phone> {companyPhone} </Phone>
          <ShowPhone type="button">Показать телефон</ShowPhone>
        </PhoneBlock>
      </Link>
    </Item>
  );
};
