import moment from 'moment';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
const cyrillicToTranslit = new CyrillicToTranslit();

export const switchDateFormat = (date) => {
  const arr = date.split('-');
  return `${arr[2]}-${arr[1]}-${arr[0]}`;
};

export const previewPhoto = (e, setFuncion) => {
  let reader = new FileReader();
  reader.onload = (ev) => setFuncion(ev.target.result);
  reader.readAsDataURL(e.files[0]);
};

// export const uploadPhoto = async (files) => {
//   const image = new Promise((resolve) => {
//     let reader = new FileReader();
//     reader.onloadend = () => resolve(reader.result);
//     reader.readAsDataURL(files);
//   });
//   return await image;
// };

export const currentDay = moment().format().slice(0, 10);

export const phoneNumberMask = [
  '(',
  /[0]/,
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

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

export const converUrl = (url) => {
  const linkUrl = url.replace(/[.,%]/g, '');
  return cyrillicToTranslit.transform(linkUrl, '_').toLowerCase();
};
