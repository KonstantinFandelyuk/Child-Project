import { makeAutoObservable, action } from 'mobx';
import { fetchArticlesList, fetchArticle } from '../api/Api_Articles';
import GlobalStore from './GlobalStore';
const { switchLoading } = GlobalStore;
import { toJS } from 'mobx';

class ArticlesStore {
  articlesList = [];
  articleData = {};
  limitCount = 5;
  constructor() {
    makeAutoObservable(this, {
      getArticlesList: action.bound,
      showMeArticles: action.bound,
      getArticle: action.bound,
    });
  }
  showMeArticles() {
    this.limitCount += 5;
  }

  async getArticlesList(count) {
    switchLoading(true);
    const response = await fetchArticlesList(count);
    if (response) {
      this.articlesList = [...response.results];
      switchLoading(false);
    }
  }
  async getArticle(id) {
    switchLoading(true);
    sessionStorage.setItem('article', id);
    const response = await fetchArticle(id);
    if (response) {
      switchLoading(false);
      this.articleData = { ...response.results[0] };
    }
  }
}
export default new ArticlesStore();
