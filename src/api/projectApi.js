import axiosClient from "./axiosClient";

const projectApi = {
  getAll: () => axiosClient.get("/projects"),
  getById: (id) => axiosClient.get(`/projects/${id}`),
  create: (data) => axiosClient.post("/projects", data),
  update: (id, data) => axiosClient.put(`/projects/${id}`, data),
  remove: (id) => axiosClient.delete(`/projects/${id}`),
  assignMember: (id, userId) => axiosClient.post(`/projects/${id}/members/${userId}`),
  removeMember: (id, userId) => axiosClient.delete(`/projects/${id}/members/${userId}`),
};

export default projectApi;
