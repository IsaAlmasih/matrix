import { UserStore } from "./UserStore";

class Store {
  constructor() {
    this.user = new UserStore();
  }
}

const store = new Store();
export default store;
