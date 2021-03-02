import React from 'react';
import { ButtonBigLink } from '../../../Elements/Button';
import { Wrap, HeroTitle, SubTitle } from './style';

export const GetStart = () => {
  return (
    <section>
      <Wrap>
        <div className="container">
          <HeroTitle>Get Started Today.</HeroTitle>
          <SubTitle>
            Join the Bello community of people who are securing their financial future.
          </SubTitle>
          <ButtonBigLink link="/catalog" text="В каталог" buttonType="big" position="center" />
        </div>
      </Wrap>
    </section>
  );
};
