import axiosClient from "./axiosClient";

const profileApi = {
  getMyProfile: () => axiosClient.get("/profile/me"),
};

export default profileApi;
