import BaseApi from "./BaseApi";

export class UserApi extends BaseApi {
  async getCurrentUser() {
    // Placeholder for API call
    return { username: "Admin" };
  }
}

export default UserApi;
