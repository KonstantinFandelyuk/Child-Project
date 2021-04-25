import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ArticlesStore from '../../../../store/ArticlesStore';
import { ArticlePage } from './style';

export const Article = observer(() => {
  const { getArticle, articleData } = ArticlesStore;
  const { title, text, img, objectId } = articleData;

  useEffect(() => {
    getArticle(sessionStorage.getItem('article'));
  }, []);

  return (
    <ArticlePage>
      <h1>Iam page {objectId}</h1>
      <div>{title}</div>
      <div>{text}</div>
      <img src={img} alt="" />
    </ArticlePage>
  );
});
