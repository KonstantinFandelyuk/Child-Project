import { makeAutoObservable, action } from 'mobx';
import { fetchUserReg, fetchUserLogin, fetchCurrentUser } from '../api/Api_Auth';
import GlobalStore from './GlobalStore';
const { switchLoading } = GlobalStore;
// import { toJS } from 'mobx';

class AuthStore {
  modalLogin = false;
  modalReg = false;
  currentUser = {};
  sessionToken = sessionStorage.getItem('_id') ? sessionStorage.getItem('_id') : this.sessionToken;

  constructor() {
    makeAutoObservable(this, {
      openModalLogIn: action.bound,
      openModalReg: action.bound,
      getRegUser: action.bound,
      getLogInUser: action.bound,
      getCurrentUser: action.bound,
    });
  }

  openModalLogIn() {
    this.modalLogin = !this.modalLogin;
    this.modalReg = false;
  }

  openModalReg() {
    this.modalReg = !this.modalReg;
    this.modalLogin = false;
  }

  async getRegUser(data) {
    switchLoading(true);
    const response = await fetchUserReg(data);
    if (response.objectId) {
      this.sessionToken = response.sessionToken;
      sessionStorage.setItem('_id', response.sessionToken);
      this.currentUser = response;
      this.modalReg = false;
      switchLoading(false);
    } else {
      switchLoading(false);
      alert(response.error);
    }
  }

  async getLogInUser(data) {
    switchLoading(true);
    const response = await fetchUserLogin(data);
    if (response.objectId) {
      this.sessionToken = response.sessionToken;
      sessionStorage.setItem('_id', response.sessionToken);
      this.currentUser = response;
      this.modalLogin = false;
      switchLoading(false);
    } else {
      switchLoading(false);
      alert(response.error);
    }
  }
  async getCurrentUser() {
    switchLoading(true);
    const response = await fetchCurrentUser(this.sessionToken);
    if (response.objectId) {
      switchLoading(false);
      this.currentUser = response;
    } else {
      switchLoading(false);
      alert(response.error);
    }
  }
}
export default new AuthStore();
