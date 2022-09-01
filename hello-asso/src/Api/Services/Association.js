import httpService from "../httpService";
const getAll = () => {
  return http.get("/associations");
};
const get = id => {
  return http.get(`/association/${id}`);
};
const create = data => {
  return http.post("/association", data);
};
const update = (id, data) => {
  return http.put(`/association/${id}`, data);
};
const remove = id => {
  return http.delete(`/association/${id}`);
};
const removeAll = () => {
  return http.delete(`/association`);
};
const findByTitle = title => {
  return http.get(`/association?title=${title}`);
};
const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
export default TutorialService;