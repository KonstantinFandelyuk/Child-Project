import styled from 'styled-components';

export const StarsBlock = styled.div`
  overflow: hidden;
  width: 150px;

  &:not(:checked) > input {
    display: none;
  }
  &:not(:checked) > label {
    float: right;
    width: 30px;
    padding: 0;
    cursor: pointer;
    font-size: 32px;
    color: lightgrey;
  }
  &:not(:checked) > label:before {
    content: '★';
  }
  & > input:checked ~ label {
    color: gold;
  }

  &:not(:checked) > label:hover,
  &:not(:checked) > label:hover ~ label {
    color: gold;
  }
  & > input:checked + label:hover,
  & > input:checked + label:hover ~ label,
  & > input:checked ~ label:hover,
  & > input:checked ~ label:hover ~ label,
  & > label:hover ~ input:checked ~ label {
    color: gold;
    text-shadow: 1px 1px goldenrod;
  }
  .rate-area > label:active {
    position: relative;
  }
`;
