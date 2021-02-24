import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 113px;
  padding-bottom: 164px;
`;

export const BlockItem = styled.div`
  margin-left: 30px;
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
`;

export const Description = styled.div`
  font-size: 1.9rem;
  line-height: 30px;
  color: #5a6482;
  margin-bottom: 15px;
  max-width: 480px;
`;

export const BlockPic = styled.div`
  position: relative;
`;

export const Information = styled.div`
  position: absolute;
  bottom: -32px;
  left: 0;
  padding: 20px 25px;
  background-color: white;
  border-radius: 5px;
  font-weight: 300;
  font-size: 2.2rem;
  line-height: 28px;
  color: #1d253c;
  box-shadow: 0px 0px 12px 2px rgba(76, 76, 76, 0.25);
`;
