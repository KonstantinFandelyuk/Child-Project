import AuthStore from '../../store/AuthStore';

export const createNewComment = (userComments) => {
  const { objectId: userOwnerId, firstName, lastName } = AuthStore.currentUser;
  return {
    userName: firstName,
    userSurname: lastName,
    userComments,
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
  };
};
