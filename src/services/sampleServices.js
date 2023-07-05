import request from "./request";

const sampleServices = {
  async create(form) {
    return await request.post("/samples/sample", form);
  },
  async getSamplesByProjectId(id) {
    return await request.get("/samples/?project_id=" + id + "&status=true");
  },
};

export { sampleServices };
