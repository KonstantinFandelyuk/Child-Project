import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { observer } from 'mobx-react-lite';
import CatalogStore from '../../../../store/CatalogStore';
import { Stars } from '../../../Elements/Stars';
import { Slider } from '../../../Elements/Slider';
import { createNewComment } from '../../../helpers/createObjects';
import {
  PlacePage,
  Row,
  RowItem,
  NamePlace,
  RatingPlace,
  FeedbackPlace,
  PhonePlace,
  AboutPlace,
  CommentsPlace,
} from './style';

export const CatalogPage = observer(() => {
  const {
    getCurrentcatalogItem,
    currentLinkItem,
    getFeedbackPlace,
    feedbackList,
    getAddFeedbackPlace,
  } = CatalogStore;
  const [{ ...item }] = currentLinkItem;
  const {
    objectId,
    companyName,
    companyPhone,
    companyAbout,
    companyAddress,
    companyCategory,
    companyFacebook,
    companyInstagram,
    companySite,
    companyYoutube,
    companyPhoto,
    companyRating,
    companyTags,
  } = item;

  useEffect(() => {
    const catalogId = sessionStorage.getItem('catalog') ? sessionStorage.getItem('catalog') : '';
    if (catalogId) {
      getFeedbackPlace(catalogId);
      getCurrentcatalogItem(catalogId);
    } else {
      console.log('Нет айди во время поиска каталога');
    }
  }, []);

  const sendComments = (values) => {
    const data = createNewComment(values.userComment);
    getAddFeedbackPlace(data);
    getFeedbackPlace(objectId);
  };

  return (
    <PlacePage>
      <div className="container">
        <Row>
          <RowItem>
            <Slider />
          </RowItem>
          <RowItem>
            <NamePlace>{companyName}</NamePlace>
            <Stars value={companyRating} sizeImage={30} />
            <FeedbackPlace>Всего отзывов 5</FeedbackPlace>
            <PhonePlace>тел: {companyPhone}</PhonePlace>
            <PhonePlace>Адрес: {companyAddress}</PhonePlace>
            {/* <PhonePlace>
              Сайт:<a href="#">{companySite}</a>
            </PhonePlace> */}
            <PhonePlace>{companyFacebook}</PhonePlace>
            <PhonePlace>{companyInstagram}</PhonePlace>
            <PhonePlace>{companyYoutube}</PhonePlace>
          </RowItem>
        </Row>
        <AboutPlace>
          Ищете место для душевных встреч с друзьями, проведения праздников и сытных застолий. Добро
          пожаловать в ресторан «Погремушка» на проспекте Броварской. Заведение очаровывает с
          первого взгляда: теплые расцветки интерьера и приятные фактуры в отделке создают уютную
          атмосферу. Наряду с элегантным баром и ресторанным залом имеется отдельная парадная
          территория для организации банкетов, в том числе открытая изящная терраса под
          разлетающимися воздушными пологами. Гостям предлагается продегустировать лучшие деликатесы
          украинской, грузинской и европейской кухонь, особого внимания посетителей удостаиваются
          сочные мясные блюд на гриле и аппетитные, нежные, хрустящие хачапури. Здесь подают легкие
          завтраки, питательные бизнес-ланчи и роскошные ужины, доступен богатый ассортимент
          напитков и специальные варианты меню. Удачно дополнит отдых дымный кальян с различными
          вкусами на выбор и исполнение песен в караоке в веселой компании, каталог включает
          легендарные композиции и хиты последних лет. Удобство клиентов обеспечивает собственная
          автомобильная парковка и бесплатный доступ к Wi-Fi на всех площадках. Обратитесь по
          указанному телефону для заказа столика или обсуждения деталей торжества. Ресторан
          «Погремушка» – посидим хорошо!
        </AboutPlace>
        <Formik
          initialValues={{
            userComment: '',
          }}
          onSubmit={sendComments}
          // validationSchema={SignupSchema}
        >
          {({ isSubmitting, errors, touched, values }) => (
            <Form>
              <Field type="text" name="userComment" placeholder="userComment" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <CommentsPlace>
          {feedbackList.map((item) => (
            <div>{item.userComments}</div>
          ))}
        </CommentsPlace>
      </div>
    </PlacePage>
  );
});
