import { makeAutoObservable, action } from 'mobx';
import { fetchUpdateCurrentUser } from '../api/Api_Auth';
import { fetchCompanyCreate } from '../api/Api_UserCabinet';
import GlobalStore from './GlobalStore';
const { switchLoading } = GlobalStore;
// import { toJS } from "mobx";

class UserCabinetStore {
  placeModal = false;
  constructor() {
    makeAutoObservable(this, {
      changeInfoUser: action.bound,
      openModalPlace: action.bound,
      createNewPlace: action.bound,
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
}
export default new UserCabinetStore();
