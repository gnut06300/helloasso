import httpService from "../httpService";

const getInfo = (name) => {
return httpService.get(`/organizations/${name}`);
};
const getEvents = (name) => {
return httpService.get(`/organizations/${name}/forms`);
};
const AssociationService = {
getInfo,
getEvents,
};
export default AssociationService;