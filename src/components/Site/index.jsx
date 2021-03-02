import React from 'react';
import { Main } from './Main';
import { Advantage } from './Section/Advantage';
import { CompletelyFree } from './Section/CompletelyFree';
import { HelpParents } from './Section/HelpParents';
import { HowWorks } from './Section/HowWorks';
import { TabsCategory } from './Section/TabsCategory';
import { GetStart } from './Section/GetStart';

export const Site = () => {
  return (
    <div className="wrapper">
      <Main />
      <TabsCategory />
      <HelpParents />
      <Advantage />
      <HowWorks />
      <CompletelyFree />
      <GetStart />
    </div>
  );
};
