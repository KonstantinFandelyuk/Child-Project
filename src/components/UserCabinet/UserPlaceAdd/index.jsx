import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import AuthStore from '../../../store/AuthStore';
import CatalogStore from '../../../store/CatalogStore';
import UserCabinetStore from '../../../store/UserCabinetStore';
import { previewGroupPhoto } from '../../helpers/helpers';
import { createObjectPlace } from '../../helpers/createObjects';
import { typePlace, typeCities } from '../../helpers/otherTypes';
import { Input, InputPhone, SelectCategory, TextArea } from '../../Elements/Input';
import { ButtonForm } from '../../Elements/Button';
import { PhotoList } from '../../Elements/PhotoList';
import {
  AddPlace,
  Title,
  CloseButton,
  AdditionalInfo,
  Row,
  RowTop,
  // UserPhoto,
  // BtnCancel,
  SelectTitle,
} from './style';

export const UserPlaceAdd = observer(() => {
  const [prevImage, setPrevImage] = useState([]);
  const { objectId } = AuthStore.currentUser;
  const { getCatalogList } = CatalogStore;
  const { createNewPlace, openModalPlace } = UserCabinetStore;

  const handlerPlaceAdd = (values, actions) => {
    const data = createObjectPlace(values, objectId, prevImage);
    createNewPlace(data);
    getCatalogList();
    actions.resetForm();
    alert('Ваше заведение проходит модерацию');
  };

  // const createPlacePhoto = () => {
  //   return (
  //     <UserPhoto elemScroll={prevImage.length === 0 ? true : false}>
  //       <label htmlFor="userPhoto">
  //         Изменить фото
  //         <input
  //           type="file"
  //           name="userPhoto"
  //           id="userPhoto"
  //           multiple
  //           accept=".jpg, .jpeg, .png"
  //           onChange={(e) => previewGroupPhoto(e, setPrevImage)}
  //         />
  //       </label>
  //       {prevImage &&
  //         prevImage.map(({ img, id }) => (
  //           <div key={id}>
  //             <img src={img} alt="" key={id} />
  //             <BtnCancel onClick={() => setPrevImage('')}>Отменить</BtnCancel>
  //           </div>
  //         ))}
  //       {prevImage.length === 0 ? <img src="/images/user_cabinet/profile/bg.jpg" alt="" /> : null}
  //     </UserPhoto>
  //   );
  // };

  return (
    <AddPlace>
      <Title>Добавление информации о заведении</Title>
      <CloseButton onClick={(e) => openModalPlace(false)}>x</CloseButton>
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
              <PhotoList setPrevImage={setPrevImage} prevImage={prevImage} />
              {/* <div className="row-item">{createPlacePhoto()}</div> */}
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
