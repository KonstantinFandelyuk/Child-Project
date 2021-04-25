import React from 'react';
import { ButtonLink } from '../../../../Elements/Button';
import ImageBlock from '../../../../../images/site/sections/completely-free/bg.svg';
import { Block, BlockItem, Title, HeroTitle, Description, BlockPic, Information } from './style';

export const CompletelyFree = () => {
  return (
    <section style={{ background: '#f9f5f2' }}>
      <div className="container">
        <Block>
          <BlockItem data-aos="fade-left" data-aos-duration="1500">
            <Title>You've Got This</Title>
            <HeroTitle>Everything you need— completely free</HeroTitle>
            <Description>
              Here’s the latest info, guides, and, helpful tools, from the Bello team. Learn about
              life insurance, finances, health and wellness.
            </Description>
            <ButtonLink link="/catalog" text="Visit Learning Center" colorpic="#007189" />
          </BlockItem>
          <BlockItem data-aos="fade-right" data-aos-duration="1500">
            <BlockPic>
              <img src={ImageBlock} alt="" />
              <Information>There's also human help 🤓</Information>
            </BlockPic>
          </BlockItem>
        </Block>
      </div>
    </section>
  );
};
