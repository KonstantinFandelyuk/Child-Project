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
