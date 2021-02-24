import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CatalogItem } from './CatalogItem';
import { CatalogPage, Title, CatalogList } from './style';
import CatalogStore from '../../../store/CatalogStore';

export const Catalog = observer(() => {
  const { getCatalogList, catalog } = CatalogStore;

  useEffect(() => {
    getCatalogList();
  }, [catalog.length]);

  return (
    <CatalogPage>
      <div className="container">
        <Title>Catalog</Title>
        <CatalogList>
          {catalog
            .filter(({ isValide }) => isValide)
            .map((item) => (
              <CatalogItem item={item} key={item.objectId} />
            ))}
        </CatalogList>
      </div>
    </CatalogPage>
  );
});
