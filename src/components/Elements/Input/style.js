import styled from 'styled-components';

export const InputElement = styled.div`
  position: relative;
  width: ${({ sizeInput }) => (sizeInput !== 'undefined' ? `${sizeInput}px` : '400px')};
`;

export const InputElementPhone = styled(InputElement)`
  position: relative;
  input {
    font-size: 1.6rem;
    font-weight: 300;
    padding: 18px 19px 7px 10px;
    width: 100%;
    outline: none;
    min-height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.07);
    &:not(:placeholder-shown) + label {
      font-size: 1.1rem;
      color: rgba(55, 55, 55, 1);
      top: 4px;
      left: 8px;
      transition: 0.2s linear;
    }
  }
`;

export const InputStyle = styled.input`
  font-size: 1.6rem;
  font-weight: 300;
  padding: 15px 19px 15px 10px;
  width: 100%;
  outline: none;
  min-height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.07);
  &:not(:placeholder-shown) + label {
    font-size: 1.1rem;
    color: rgba(55, 55, 55, 1);
    top: 4px;
    left: 8px;
    transition: 0.2s linear;
  }
`;

export const TextAreaStyle = styled.textarea`
  resize: none;
  width: 100%;
  height: 110px;
`;

export const Label = styled.label`
  position: absolute;
  left: 16px;
  top: 16px;
  color: rgba(55, 55, 55, 0.5);
  font-size: 1.6rem;
  font-weight: 300;
  transition: 0.2s linear;
`;

export const Error = styled.div`
  color: rgba(226, 106, 106, 1);
  padding: 5px;
  height: 25px;
`;

export const SelectStyle = styled.select`
  height: 40px;
  padding: 0 10px;
  font-size: 1.8rem;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;
`;
