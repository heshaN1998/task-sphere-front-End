import axiosClient from "./axiosClient";

const dashbordApi = {
  getSummary: (weekStartDate) =>
    axiosClient.get("/dashbord/summary", {
      params: weekStartDate ? { weekStartDate } : {},
    }),
};

export default dashbordApi;
