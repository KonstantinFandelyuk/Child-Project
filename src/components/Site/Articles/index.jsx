import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ArticlesStore from '../../../store/ArticlesStore';
import { Article } from './Article';
import { converUrl } from '../../helpers/helpers';
import {
  ArticlesPage,
  ItemImg,
  ItemText,
  TextDate,
  Title,
  ArticlesList,
  ArticlesItem,
  TextTitle,
  TextDescrp,
  MoreArticals,
} from './style';

export const Articles = observer(() => {
  const { getArticlesList, articlesList, showMeArticles, limitCount, getArticle } = ArticlesStore;

  useEffect(() => {
    getArticlesList(limitCount);
  }, [limitCount]);

  return (
    <ArticlesPage>
      <div className="container">
        <Title>Статьи</Title>
        <ArticlesList>
          {articlesList.map(({ objectId, title, text, img, createdAt }) => (
            <ArticlesItem key={objectId}>
              <ItemImg>
                <img src={img} alt="" />
              </ItemImg>
              <ItemText>
                <TextDate>{createdAt}</TextDate>
                <Link to={`/articles/${converUrl(title)}`} onClick={(e) => getArticle(objectId)}>
                  <TextTitle>{title}</TextTitle>
                </Link>
                <TextDescrp>{`${text.slice(0, 200)}....`}</TextDescrp>
              </ItemText>
            </ArticlesItem>
          ))}
        </ArticlesList>
        <MoreArticals
          type="button"
          onClick={(e) => showMeArticles()}
          disabled={limitCount > articlesList.length ? true : false}
        >
          {limitCount > articlesList.length ? 'Статьей больше нет 🥺' : 'Показать еще статьи 👇'}
        </MoreArticals>
      </div>
    </ArticlesPage>
  );
});
