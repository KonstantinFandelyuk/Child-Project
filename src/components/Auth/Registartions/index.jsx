import React from 'react';
import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import { createNewUser } from '../../helpers/helpers';
import { RegSchema } from './validations';
import { Input, InputPhone } from '../../Elements/Input';
import { ButtonForm } from '../../Elements/Button';
import AuthStore from '../../../store/AuthStore';
import { Registr, Title } from './style';

export const Registartions = observer(() => {
  const { getRegUser } = AuthStore;

  const sendRegData = (values) => {
    const data = createNewUser(values);
    getRegUser(data);
  };

  return (
    <Registr>
      <Title>Регистрация</Title>
      <Formik
        initialValues={{
          username: '',
          password: '',
          email: '',
          firstName: '',
          lastName: '',
          secondName: '',
          phoneNumber: '',
          userBirthday: '',
        }}
        onSubmit={sendRegData}
        validationSchema={RegSchema}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <Input type="text" name="username" placeholder=" " label="Ваш никнейм" />
            <Input type="email" name="email" placeholder=" " label="Ваш Email" />
            <Input type="password" name="password" placeholder=" " label="Ваш пароль" />
            <Input type="date" name="userBirthday" placeholder=" " label="Дата рождения" />
            <Input type="text" name="firstName" placeholder=" " label="Ваше имя" />
            <Input type="text" name="lastName" placeholder=" " label="Ваша фамилия" />
            <Input type="text" name="secondName" placeholder=" " label="Ваше отчество" />
            <InputPhone name="phoneNumber" label="Телефон" />
            <ButtonForm type="submit" disabled={isSubmitting} text="Submit" />
          </Form>
        )}
      </Formik>
    </Registr>
  );
});
