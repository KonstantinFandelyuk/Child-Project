import React from 'react';
import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import { Input, ButtonForm } from '../../Elements';
import { Login, Title } from './style';
import AuthStore from '../../../store/AuthStore';

export const LogIn = observer(() => {
  const { getLogInUser } = AuthStore;
  
  const sendLogIn = (values) => {
    getLogInUser(values);
  };

  return (
    <Login>
      <Title>Войти в личный кабинет</Title>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={sendLogIn}
        // validationSchema={SignupSchema}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <Input type="text" name="username" placeholder=" " label="Your Login" />
            <Input type="password" name="password" placeholder=" " label="Password" />
            <ButtonForm type="submit" disabled={isSubmitting} text="Submit" />
          </Form>
        )}
      </Formik>
    </Login>
  );
});
