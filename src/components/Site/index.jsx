import React from 'react';
import { Main } from './StartPage/Main';
import { Advantage } from './StartPage/Section/Advantage';
import { CompletelyFree } from './StartPage/Section/CompletelyFree';
import { HelpParents } from './StartPage/Section/HelpParents';
import { HowWorks } from './StartPage/Section/HowWorks';
import { TabsCategory } from './StartPage/Section/TabsCategory';
import { GetStart } from './StartPage/Section/GetStart';

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
