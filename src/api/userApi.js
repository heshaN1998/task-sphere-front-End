import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => axiosClient.get("/users"),
  getTeamMembers: () => axiosClient.get("/users/team-members"),
  getById: (id) => axiosClient.get(`/users/${id}`),
  updateRole: (id, role) => axiosClient.patch(`/users/${id}/role?role=${role}`),
  setActive: (id, active) => axiosClient.patch(`/users/${id}/active?active=${active}`),
};

export default userApi;
