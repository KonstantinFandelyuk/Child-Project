import moment from 'moment';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
const cyrillicToTranslit = new CyrillicToTranslit();
const shortid = require('shortid');

export const switchDateFormat = (date) => {
  const arr = date.split('-');
  return `${arr[2]}-${arr[1]}-${arr[0]}`;
};

export const previewPhoto = (e, setFuncion) => {
  let reader = new FileReader();
  reader.onload = (ev) => setFuncion(ev.target.result);
  reader.readAsDataURL(e.target.files[0]);
};

export const previewGroupPhoto = (e, setFuncion) => {
  const photoList = [...e.target.files].slice(0, 4);
  for (let i = 0; i < photoList.length; i++) {
    let reader = new FileReader();
    reader.onload = (ev) =>
      setFuncion((prev) => [...prev, { id: shortid.generate(), img: ev.target.result }]);
    reader.readAsDataURL(e.target.files[i]);
  }
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

export const hidePhoneNumber = (phoneNumber) =>
  '*'.repeat(Math.min(12, phoneNumber.length)) + phoneNumber.slice(12);

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

export const converUrl = (url) => {
  const linkUrl = url.replace(/[.,%]/g, '');
  return cyrillicToTranslit.transform(linkUrl, '_').toLowerCase();
};

export const sumRatingCompany = (value, feedvackList, currentStarsValue) => {
  const result = (value + +currentStarsValue) / (feedvackList + 1);
  return parseInt(result);
};
