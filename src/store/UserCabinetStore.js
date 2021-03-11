import { makeAutoObservable, action } from 'mobx';
import { fetchUpdateCurrentUser } from '../api/Api_Auth';
import { fetchCompanyCreate, fetchCurrentCatalogList } from '../api/Api_UserCabinet';
import GlobalStore from './GlobalStore';
import AuthStore from './AuthStore';
const { switchLoading } = GlobalStore;
const { sessionUserID } = AuthStore;
// import { toJS } from 'mobx';

class UserCabinetStore {
  placeModal = false;
  myCatalogList = [];
  constructor() {
    makeAutoObservable(this, {
      changeInfoUser: action.bound,
      openModalPlace: action.bound,
      createNewPlace: action.bound,
      showMeMyPlace: action.bound,
    });
  }

  openModalPlace() {
    this.placeModal = !this.placeModal;
  }

  changeInfoUser(id, data) {
    fetchUpdateCurrentUser(id, data);
  }

  async createNewPlace(data) {
    switchLoading(true);
    const response = await fetchCompanyCreate(data);
    if (response) {
      this.placeModal = false;
      switchLoading(false);
    }
  }

  async showMeMyPlace() {
    switchLoading(true);
    const response = await fetchCurrentCatalogList(sessionUserID);
    if (response) {
      this.myCatalogList = response.results;
      switchLoading(false);
    }
  }
}
export default new UserCabinetStore();
