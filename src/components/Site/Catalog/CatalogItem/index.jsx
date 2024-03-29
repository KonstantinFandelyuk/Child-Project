import React, { useState } from 'react';
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
import noImg from '../../../../images/site/catalog/no-img.png';

export const CatalogItem = ({ item }) => {
  const [isShowPhone, setIsShowPhone] = useState(false);
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
    <Item>
      <div onClick={(e) => handlerOpenLink()}>
        <Link to={`/catalog/company/${converUrl(companyName)}`}>
          <Name>{companyName}</Name>
          <Rating>⭐{companyRating} </Rating>
          <Descriptions>{companyAbout.slice(0, 70)}...</Descriptions>
          <CompanyImage src={companyPhoto.length ? companyPhoto[0].img : noImg} alt="" />
        </Link>
      </div>
      <PhoneBlock>
        <Phone> {isShowPhone ? companyPhone : hidePhoneNumber(companyPhone)} </Phone>
        <ShowPhone type="button" onClick={() => setIsShowPhone(!isShowPhone)}>
          Показать телефон
        </ShowPhone>
      </PhoneBlock>
    </Item>
  );
};
