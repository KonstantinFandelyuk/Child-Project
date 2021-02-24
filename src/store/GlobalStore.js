import { makeAutoObservable, action } from 'mobx';

class GlobalStore {
  loading = false;

  constructor() {
    makeAutoObservable(this, {
      switchLoading: action.bound,
    });
  }

  switchLoading(bool) {
    this.loading = bool;
  }
}
export default new GlobalStore();
