import { makeAutoObservable, action } from 'mobx';
import {
  fetchCatalogList,
  fetchCatalogCurrentItem,
  fetchFeedbackPlace,
  fetchAddFeedbackPlace,
} from '../api/Api_Catalog';
import GlobalStore from './GlobalStore';
// import { toJS } from 'mobx';
const { switchLoading } = GlobalStore;

class CatalogStore {
  catalog = [];
  currentLinkItem = [];
  feedbackList = [];
  constructor() {
    makeAutoObservable(this, {
      getCatalogList: action.bound,
      getCurrentcatalogItem: action.bound,
      getFeedbackPlace: action.bound,
      getAddFeedbackPlace: action.bound,
    });
  }

  async getCatalogList() {
    switchLoading(true);
    const response = await fetchCatalogList();
    if (response) {
      this.catalog = response.results;
      switchLoading(false);
    }
  }

  async getCurrentcatalogItem(id) {
    switchLoading(true);
    const response = await fetchCatalogCurrentItem(id);
    if (response) {
      this.currentLinkItem = response.results;
      switchLoading(false);
    }
  }

  async getFeedbackPlace(id) {
    switchLoading(true);
    const response = await fetchFeedbackPlace(id);
    if (response) {
      this.feedbackList = response.results;
      switchLoading(false);
    }
  }
  async getAddFeedbackPlace(data) {
    switchLoading(true);
    const response = await fetchAddFeedbackPlace(data);
    if (response) {
      switchLoading(false);
    }
  }
}
export default new CatalogStore();
