import React from 'react';
import { ButtonLink } from '../../../../Elements/Button';
import ImageBlock from '../../../../../images/site/sections/help-parents/bg.svg';
import { Block, BlockItem, Title, HeroTitle, Description, BlockPic, Information } from './style';

export const HelpParents = () => {
  return (
    <section>
      <div className="container">
        <Block>
          <BlockItem data-aos="fade-left" data-aos-duration="1500">
            <Title>Technology meets service</Title>
            <HeroTitle>We're here to help</HeroTitle>
            <Description>
              Bella, our smart bot, can guide you to your perfect policy. There’s also human help
              whenever you need it.
            </Description>
            <ButtonLink link="/catalog" text="Get help" colorpic="#007189" />
          </BlockItem>
          <BlockItem data-aos="fade-right" data-aos-duration="1500">
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
