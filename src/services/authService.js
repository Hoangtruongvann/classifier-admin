import request from "./request";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

const authService = {
  async login(credentials) {
    try {
      const { data } = await axios({
        method: "post",
        url: process.env.REACT_APP_API + "login/token",
        data: credentials,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.access_token) {
        cookies.remove("auth");
        cookies.set("auth", true);
        const user = await request.get("/users/info");
        cookies.set("user", user.data);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  },
  async register(user) {
    return await request.post("/user/register", user);
  },
  async logout() {
    return await request.post("/logout");
  },
};

export { authService };
