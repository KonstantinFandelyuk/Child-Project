import React from 'react';
import { Header } from '../layouts/Header';
import { Main } from './Main';
import { Advantage } from './Section/Advantage';
import { HelpParents } from './Section/HelpParents';
import { HowWorks } from './Section/HowWorks';
import { TabsCategory } from './Section/TabsCategory';

export const Site = () => {
  return (
    <div className="wrapper">
      <Main />
      <TabsCategory />
      <HelpParents />
      <Advantage />
      <HowWorks />
    </div>
  );
};
