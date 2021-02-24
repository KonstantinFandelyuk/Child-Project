import React from 'react';
import ImageBlock from '../../../../images/site/sections/help-parents/bg.svg';
import { Block, BlockItem, Title, HeroTitle, Description, BlockPic, Information } from './style';

export const HelpParents = () => {
  return (
    <section>
      <div className="container">
        <Block>
          <BlockItem>
            <Title>Technology meets service</Title>
            <HeroTitle>We're here to help</HeroTitle>
            <Description>
              Bella, our smart bot, can guide you to your perfect policy. There’s also human help
              whenever you need it.
            </Description>
            <a href="#">Get help</a>
          </BlockItem>
          <BlockItem>
            <BlockPic>
              <img src={ImageBlock} alt="" />
              <Information>There's also human help 👋</Information>
            </BlockPic>
          </BlockItem>
        </Block>
      </div>
    </section>
  );
};
