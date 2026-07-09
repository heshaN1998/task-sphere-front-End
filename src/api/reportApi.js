import axiosClient from "./axiosClient";

const reportApi = {
  getMyReports: () => axiosClient.get("/reports/my"),
  getById: (id) => axiosClient.get(`/reports/${id}`),
  create: (data) => axiosClient.post("/reports", data),
  update: (id, data) => axiosClient.put(`/reports/${id}`, data),
  submit: (id) => axiosClient.put(`/reports/${id}/submit`),
  remove: (id) => axiosClient.delete(`/reports/${id}`),
};

export default reportApi;
