import AuthStore from '../../store/AuthStore';
import CatalogStore from '../../store/CatalogStore';

const getMeCurrentTime = () => {
  const date = new Date();
  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return date.toLocaleString('ru', options);
};

export const createNewComment = (userComments) => {
  const { objectId: userOwnerId, firstName, lastName } = AuthStore.currentUser;
  return {
    userName: firstName,
    userSurname: lastName,
    userComments,
    feedbackTime: getMeCurrentTime(),
    companyOwner: {
      __type: 'Pointer',
      className: 'Company',
      objectId: sessionStorage.getItem('catalog'),
    },
    userOwner: {
      __type: 'Pointer',
      className: '_User',
      objectId: userOwnerId,
    },
    userRating: +CatalogStore.starsValue,
  };
};

export const createNewUser = ({
  username,
  password,
  email,
  firstName,
  lastName,
  secondName,
  phoneNumber,
  userBirthday,
}) => {
  return {
    username,
    password,
    email,
    firstName,
    lastName,
    secondName,
    phoneNumber: phoneNumber.replace(/\s/g, ''),
    userBirthday: {
      __type: 'Date',
      iso: userBirthday,
    },
  };
};

export const createObjectPlace = (
  {
    companyName,
    companyAddress,
    companyPhone,
    companySite,
    companyFacebook,
    companyYoutube,
    companyInstagram,
    companyAbout,
    companyCategory,
  },
  id,
  prevImage,
) => {
  return {
    companyName,
    companyAddress,
    companyPhone: companyPhone.replace(/\s/g, ''),
    companySite,
    companyFacebook,
    companyYoutube,
    companyInstagram,
    companyAbout,
    whoCreate: {
      __type: 'Pointer',
      className: '_User',
      objectId: id,
    },
    companyCategory,
    companyPhoto: prevImage,
  };
};
