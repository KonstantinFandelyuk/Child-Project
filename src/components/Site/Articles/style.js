import styled from 'styled-components';

export const ArticlesPage = styled.div`
  padding: 40px 0;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 52px;
  color: #1d253c;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto 35px auto;
`;

export const ArticlesList = styled.ul`
  margin-bottom: 50px;
`;
export const ArticlesItem = styled.li`
  display: flex;
  flex: 1, 0, 50%;
  flex-wrap: wrap;
  margin-bottom: 20px;
  box-shadow: 0px 0px 12px -1px rgba(217, 215, 215, 0.9);
  border-radius: 5px;
`;
export const ItemImg = styled.div`
  flex-basis: 30%;
  min-width: 300px;
`;
export const ItemText = styled.div`
  flex-basis: 70%;
  padding: 15px 16px 20px;
`;

export const TextDate = styled.div`
  margin-bottom: 15px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const TextTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #0056a8;
`;

export const TextDescrp = styled.div`
  font-size: 1.5rem;
  line-height: 1.3;
  text-align: justify;
`;

export const MoreArticals = styled.button`
  background-color: transparent;
  color: #0056a8;
  font-size: 1.8rem;
  display: block;
  margin-left: auto;
`;
