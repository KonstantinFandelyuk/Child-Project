import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 120px 170px;
  background: #363839;
  text-align: center;
  position: relative;
  background-image: url('/images/site/sections/how-works/bg.svg');
  background-repeat: no-repeat;
  background-position: 64% 42%;
  background-size: auto;
`;

export const Title = styled.div`
  font-weight: 600;
  line-height: 17px;
  text-transform: uppercase;
  color: #f46752;
  margin-bottom: 27px;
`;

export const HeroTitle = styled.div`
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 52px;
  color: #1d253c;
  margin-bottom: 35px;
  color: white;
`;

export const Description = styled.div`
  font-size: 1.9rem;
  line-height: 30px;
  color: #5a6482;
  margin-bottom: 15px;
  max-width: 730px;
  margin: 0 auto 20px auto;
`;

export const WorkStep = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 35px;
`;
export const StepItem = styled.div`
  width: 240px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ItemName = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const ItemText = styled.div`
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #acb4bf;
  max-width: 234px;
  margin: 0 auto;
`;

export const ItemImage = styled.div`
  margin-bottom: 22px;
`;

export const Button = styled.a`
  margin-bottom: 22px;
`;
