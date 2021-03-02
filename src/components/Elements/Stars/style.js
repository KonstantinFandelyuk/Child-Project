import styled from 'styled-components';

export const StarsRating = styled.div`
  position: relative;
  user-select: none;
  margin-bottom: 30px;
  /* &::after {
    content: attr(data-value);
    position: absolute;
    font-size: 2rem;
    vertical-align: middle;
    top: 1px;
    right: -24px;
  } */
`;

export const StarsImage = styled.img`
  width: ${({ sizeImage }) => (sizeImage !== 'undefined' ? `${sizeImage}px` : null)};
  margin-right: 5px;
`;
