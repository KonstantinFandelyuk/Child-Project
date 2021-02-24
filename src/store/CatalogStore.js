import { makeAutoObservable, action } from 'mobx';
import { fetchCatalogList, fetchCatalogCurrentItem } from '../api/Api_Catalog';
import GlobalStore from './GlobalStore';
// import { toJS } from 'mobx';
const { switchLoading } = GlobalStore;

class CatalogStore {
  catalog = [];
  currentLinkItem = [];
  constructor() {
    makeAutoObservable(this, {
      getCatalogList: action.bound,
      getCurrentcatalogItem: action.bound,
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
}
export default new CatalogStore();
