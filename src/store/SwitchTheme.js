import { makeAutoObservable } from "mobx";
// import { toJS } from "mobx";

class SwitchTheme {
  themeName = localStorage.getItem("theme") ? localStorage.getItem("theme") : this.themeName;
  constructor() {
    makeAutoObservable(this);
  }
  switchTheme() {
    if (this.themeName === "light") {
      this.themeName = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      this.themeName = "light";
      localStorage.setItem("theme", "light");
    }
  }
}
export default new SwitchTheme();
