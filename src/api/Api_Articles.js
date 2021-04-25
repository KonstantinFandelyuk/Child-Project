// import { toJS } from 'mobx';

export const fetchArticlesList = async (limintCount = 5) => {
  try {
    const response = await fetch(`${process.env.API}/classes/Articles?limit=${limintCount}`, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': process.env.APP_ID,
        'X-Parse-REST-API-Key': process.env.API_KEY,
      },
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const fetchArticle = async (id) => {
  try {
    const response = await fetch(`${process.env.API}/classes/Articles?where={"objectId":"${id}"}`, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': process.env.APP_ID,
        'X-Parse-REST-API-Key': process.env.API_KEY,
      },
    });
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};
