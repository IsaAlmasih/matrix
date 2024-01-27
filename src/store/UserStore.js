import { makeAutoObservable } from "mobx";
import axiosConfig from "../utils/axiosConfig";

export class UserStore {
  username = "";
  token = "";
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (username, password) => {
    const params = new URLSearchParams();
    params.append("username", `${username}`);
    params.append("password", `${password}`);
    const response = axiosConfig().get(`users/login${params.toString()}`);

    if (response.status === 200) {
      const { username, API_Key, first_name, last_name, role } =
        await response.data;
        this.isAuthenticated = true;
        this.username = username;
        this.token = API_Key;
        localStorage.setItem("token",this.token)
    }
  };
  
  logout = ()=>{
    this.isAuthenticated = false;
    this.username = "";
    this.token = "";

    localStorage.removeItem("token")
  }
}
