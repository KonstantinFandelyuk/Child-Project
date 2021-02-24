import React, { useEffect } from 'react';
import CatalogStore from '../../../../store/CatalogStore';
import { observer } from 'mobx-react-lite';

export const CatalogPage = observer(() => {
  const { getCurrentcatalogItem, currentLinkItem } = CatalogStore;
  const [{ ...item }] = currentLinkItem;
  const { companyPhone } = item;

  useEffect(() => {
    const catalogId = sessionStorage.getItem('catalog') ? sessionStorage.getItem('catalog') : '';
    if (catalogId) {
      getCurrentcatalogItem(catalogId);
    } else {
      console.log('Нет айди во время поиска каталога');
    }
  }, []);

  return (
    <div>
      <div className="container">
        <h1>I new Page {companyPhone}</h1>
      </div>
    </div>
  );
});
