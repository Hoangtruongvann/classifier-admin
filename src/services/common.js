import request from "./request";

const common = (resource) => {
  return {
    async getAll() {
      return await request.get(`/${resource}`);
    },
    async getTable(query) {
      return await request.get(`/${resource}/table`, { params: query });
    },
    async create(value) {
      return await request.post(`/${resource}`, value);
    },
    async delete(id) {
      return await request.delete(`/${resource}/${id}`);
    },
    async update(id, value) {
      return await request.put(`/${resource}/${id}`, value);
    },
    async find(id) {
      return await request.get(`/${resource}/${id}`);
    },
  };
};

export default common;
