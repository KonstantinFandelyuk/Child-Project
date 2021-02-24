import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Input, ButtonForm, InputPhone } from '../../Elements';
import UserCabinetStore from '../../../store/UserCabinetStore';
import AuthStore from '../../../store/AuthStore';
import { previewPhoto } from '../../helpers/helpers';
import {
  Profile,
  ProfileWrapp,
  Title,
  UserInfo,
  UserPhoto,
  UserName,
  UserEmail,
  UserPhone,
  BtnCancel,
} from './style';
import { observer } from 'mobx-react-lite';

export const UserProfile = observer(() => {
  const [prevImage, setPrevImage] = useState('');
  const { changeInfoUser } = UserCabinetStore;
  const {
    objectId,
    email,
    firstName: name,
    lastName: lastN,
    phoneNumber: phone,
    userBirthday: birthday,
    userPhoto,
  } = AuthStore.currentUser;
  const { getCurrentUser } = AuthStore;

  const handlerChangeInfoUser = ({ firstName, lastName, userBirthday, phoneNumber }, actions) => {
    const data = {
      firstName: firstName || name,
      lastName: lastName || lastN,
      userBirthday: {
        __type: 'Date',
        iso: userBirthday || birthday.iso,
      },
      phoneNumber: phoneNumber || phone,
      userPhoto: userPhoto || prevImage,
    };
    changeInfoUser(objectId, data);
    getCurrentUser();
    actions.resetForm();
  };

  return (
    <Profile>
      <div className="container">
        <Title>Личная информация</Title>
        <ProfileWrapp>
          <UserInfo>
            <UserPhoto>
              <label htmlFor="userPhoto">
                Изменить фото
                <input
                  type="file"
                  name="userPhoto"
                  id="userPhoto"
                  onChange={(e) => previewPhoto(e.target, setPrevImage)}
                />
              </label>
              {prevImage && <img src={prevImage} alt="" />}
              <img src={userPhoto} alt="" />
            </UserPhoto>
            {prevImage && <BtnCancel onClick={(e) => setPrevImage('')}>Отменить</BtnCancel>}
            <UserName>
              {name} {lastN}
            </UserName>
            <UserEmail>{email}</UserEmail>
            <UserPhone>{phone}</UserPhone>
          </UserInfo>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              userBirthday: '',
              phoneNumber: '',
            }}
            onSubmit={handlerChangeInfoUser}
            // validationSchema={SignupSchema}
          >
            {({ isSubmitting, errors, touched, values, actions }) => (
              <Form>
                <Input
                  type="text"
                  name="firstName"
                  placeholder=" "
                  label="Ваше имя"
                  sizeInput="420"
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder=" "
                  label="Ваша фамилия"
                  sizeInput="420"
                />
                <Input
                  type="date"
                  name="userBirthday"
                  placeholder=" "
                  label="Дата рождения"
                  sizeInput="420"
                />
                <InputPhone name="phoneNumber" label="Телефон" />
                <ButtonForm type="submit" disabled={isSubmitting} text="Подтвердить" />
              </Form>
            )}
          </Formik>
        </ProfileWrapp>
      </div>
    </Profile>
  );
});
