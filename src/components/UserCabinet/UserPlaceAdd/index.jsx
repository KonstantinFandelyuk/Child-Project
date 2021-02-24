import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import AuthStore from '../../../store/AuthStore';
import CatalogStore from '../../../store/CatalogStore';
import UserCabinetStore from '../../../store/UserCabinetStore';
import { createObjectPlace, previewPhoto } from '../../helpers/helpers';
import { Input, ButtonForm, InputPhone, TextArea, SelectCategory } from '../../Elements';
import {
  AddPlace,
  Title,
  AdditionalInfo,
  Row,
  RowTop,
  UserPhoto,
  BtnCancel,
  SelectTitle,
} from './style';

const typePlace = [
  { value: 'kindergarten', title: 'Детский садик' },
  { value: 'school', title: 'Школа' },
  { value: 'online-store', title: 'Интернет магазин' },
  { value: 'Childrens clinic', title: 'Детская клиника' },
];

const typeCities = [
  { value: 'kiev', title: 'Киев' },
  { value: 'Odessa', title: 'Одесса' },
  { value: 'Dnepr', title: 'Днепр' },
  { value: 'Zaporizhzhia', title: 'Запорожье' },
  { value: 'Lviv', title: 'Львов' },
  { value: 'Krivoy Rog', title: 'Кривой Рог' },
  { value: 'Nikolaev', title: 'Николаев' },
  { value: 'Chernihiv', title: 'Чернигов' },
];

export const UserPlaceAdd = observer(() => {
  const [prevImage, setPrevImage] = useState('');
  const { objectId } = AuthStore.currentUser;
  const { getCatalogList } = CatalogStore;
  const { createNewPlace } = UserCabinetStore;

  const handlerPlaceAdd = (values, actions) => {
    const data = createObjectPlace(values, objectId, prevImage);
    createNewPlace(data);
    getCatalogList();
    actions.resetForm();
  };

  return (
    <AddPlace>
      <Title>Добавление информации о заведении</Title>
      <Formik
        initialValues={{
          companyName: '',
          companyAddress: '',
          companyPhone: '',
          companySite: '',
          companyFacebook: '',
          companyYoutube: '',
          companyInstagram: '',
          companyAbout: '',
          companyCategory: 'Детский садик',
        }}
        onSubmit={handlerPlaceAdd}
        // validationSchema={RegSchema}
      >
        {({ isSubmitting, errors, touched, values, actions }) => (
          <Form>
            <RowTop>
              <div className="row-item">
                <SelectTitle>Выбирите город</SelectTitle>
                <SelectCategory type="select" name="companyCities" data={typeCities} />
                <SelectTitle>Выбирите тип заведения</SelectTitle>
                <SelectCategory type="select" name="companyCategory" data={typePlace} />
              </div>
              <div className="row-item">
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
                  <img src="/images/user_cabinet/profile/bg.jpg" alt="" />
                </UserPhoto>
                {prevImage && <BtnCancel onClick={(e) => setPrevImage('')}>Отменить</BtnCancel>}
              </div>
            </RowTop>
            <Input type="text" name="companyName" placeholder=" " label="Название заведения" />
            <Input type="text" name="companyAddress" placeholder=" " label="Адрес заведения" />
            <InputPhone name="companyPhone" label="Телефон" />
            <AdditionalInfo>Дополнительная информация</AdditionalInfo>
            <Row>
              <Input
                type="url"
                name="companySite"
                placeholder=" "
                label="Сайт заведения"
                pattern="https://.*"
                sizeInput="220"
              />
              <Input
                type="url"
                name="companyFacebook"
                placeholder=" "
                label="Страница Facebook"
                pattern="https://.*"
                sizeInput="220"
              />
            </Row>
            <Row>
              <Input
                type="url"
                name="companyYoutube"
                placeholder=" "
                label="Страница YouTube"
                pattern="https://.*"
                sizeInput="220"
              />
              <Input
                type="url"
                name="companyInstagram"
                placeholder=" "
                label="Страница Instagram"
                pattern="https://.*"
                sizeInput="220"
              />
            </Row>
            <AdditionalInfo>Краткое описание</AdditionalInfo>
            <TextArea name="companyAbout" />
            <ButtonForm type="submit" disabled={isSubmitting} text="Submit" buttonWidth="100" />
          </Form>
        )}
      </Formik>
    </AddPlace>
  );
});
