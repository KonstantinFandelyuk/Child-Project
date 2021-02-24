import React from 'react';
import { Wrap, Title, TabsList, TabsItem, TabsIcon, TabsText } from './style';

export const TabsCategory = () => {
  const arr = [
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
    { icon: 'kindergartens.svg', name: 'kindergartens' },
  ];
  return (
    <section>
      <Wrap>
        <div className="container">
          <Title>Category Tabs</Title>
          <TabsList>
            {arr.map(({ icon, name }) => {
              return (
                <TabsItem key={Math.random(new Date() / 2)}>
                  <TabsIcon>
                    <img src={`./images/site/sections/catalog/icon/${icon}`} alt="" />
                  </TabsIcon>
                  <TabsText>{name}</TabsText>
                </TabsItem>
              );
            })}
          </TabsList>
        </div>
      </Wrap>
    </section>
  );
};
