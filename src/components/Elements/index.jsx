import React from 'react';
import { Field, ErrorMessage } from 'formik';
import MaskedInput from 'react-text-mask';
import { phoneNumberMask } from '../helpers/helpers';
import {
  InputStyle,
  InputElement,
  InputElementPhone,
  TextAreaStyle,
  Label,
  ButtonElement,
  Error,
  SelectStyle,
  ButtonNavLink,
  ButtonProfileStyle,
} from './style';
const shortid = require('shortid');

export const Input = ({ type, name, label, sizeInput }) => {
  return (
    <InputElement sizeInput={sizeInput}>
      <Field name={name}>
        {({ field }) => {
          return (
            <InputStyle
              type={type}
              value={field.value}
              onChange={field.onChange}
              name={field.name}
              placeholder=" "
              id={name}
            />
          );
        }}
      </Field>
      <Label htmlFor={name}>{label}</Label>
      <Error>
        <ErrorMessage name={name} />
      </Error>
    </InputElement>
  );
};

export const InputPhone = ({ name, label }) => {
  return (
    <InputElementPhone>
      <Field
        name={name}
        render={({ field }) => (
          <MaskedInput {...field} mask={phoneNumberMask} id={name} type="text" placeholder=" " />
        )}
      />
      <Label htmlFor={name}>{label}</Label>
      <Error>
        <ErrorMessage name={name} />
      </Error>
    </InputElementPhone>
  );
};

export const TextArea = ({ name, label }) => {
  return (
    <InputElement>
      <Field name={name} component="textarea">
        {({ field }) => {
          return (
            <TextAreaStyle
              value={field.value}
              onChange={field.onChange}
              name={field.name}
              placeholder=" "
              id={name}
            />
          );
        }}
      </Field>
      <Label htmlFor={name}>{label}</Label>
      <Error>
        <ErrorMessage name={name} />
      </Error>
    </InputElement>
  );
};

export const SelectCategory = ({ type, name, data }) => {
  return (
    <Field type={type} name={name} data={data}>
      {({ field }) => {
        return (
          <SelectStyle value={field.value} onChange={field.onChange} name={field.name}>
            {data.map(({ value, title }) => (
              <option value={value} key={shortid.generate()}>
                {title}
              </option>
            ))}
          </SelectStyle>
        );
      }}
    </Field>
  );
};

export const Button = ({ type, text, setFunction }) => {
  return (
    <ButtonElement type={type} onClick={(e) => setFunction()}>
      {text}
    </ButtonElement>
  );
};

export const ButtonForm = ({ type, text, buttonWidth }) => {
  return (
    <ButtonElement type={type} buttonWidth={buttonWidth}>
      {text}
    </ButtonElement>
  );
};

export const ButtonLink = ({ link, text, buttonType, position }) => {
  return (
    <ButtonNavLink to={link} viwe={buttonType} position={position}>
      {text}
    </ButtonNavLink>
  );
};

export const ButtonProfile = ({ link }) => {
  return <ButtonProfileStyle to={link}></ButtonProfileStyle>;
};
