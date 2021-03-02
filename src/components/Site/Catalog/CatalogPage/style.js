import styled from 'styled-components';

export const PlacePage = styled.div`
  padding: 40px 0;
`;

export const Row = styled.div`
  display: flex;
`;

export const RowItem = styled.div`
  margin-left: 40px;
  flex-basis: 15%;
  &:first-child {
    flex-basis: 50%;
    margin-left: 0px;
  }
`;

export const NamePlace = styled.div`
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 52px;
  color: #1d253c;
  margin-bottom: 20px;
`;

export const RatingPlace = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

export const PhonePlace = styled.div`
  font-size: 1.7rem;
  color: #1d253c;
  margin-bottom: 15px;
`;

export const FeedbackPlace = styled(PhonePlace)`
  margin-bottom: 15px;
`;

export const PlaceAddress = styled(PhonePlace)`
  margin-bottom: 15px;
`;

export const AboutPlace = styled(PhonePlace)`
  line-height: 1.4;
  margin-bottom: 15px;
`;

export const CommentsPlace = styled.div``;
