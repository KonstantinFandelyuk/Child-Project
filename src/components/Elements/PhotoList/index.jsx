import React, { useState } from 'react';
import { previewGroupPhoto } from '../../helpers/helpers';
import { UserPhoto, BtnCancel } from './style';

export const PhotoList = ({ setPrevImage, prevImage }) => {
  const handlerDellPhoto = (id) => {
    const data = prevImage.filter((item) => item.id !== id).map((item) => item);
    setPrevImage(data);
  };
  return (
    <UserPhoto elemScroll={prevImage.length === 0 ? true : false}>
      <label htmlFor="userPhoto">
        Изменить фото
        <input
          type="file"
          name="userPhoto"
          id="userPhoto"
          multiple
          accept=".jpg, .jpeg, .png"
          onChange={(e) => previewGroupPhoto(e, setPrevImage)}
        />
      </label>
      {prevImage &&
        prevImage.map(({ img, id }) => (
          <div>
            <img src={img} alt="" key={id} />
            <BtnCancel onClick={() => handlerDellPhoto(id)}>Отменить</BtnCancel>
          </div>
        ))}
      {prevImage.length === 0 ? <img src="/images/user_cabinet/profile/bg.jpg" alt="" /> : null}
    </UserPhoto>
  );
};
