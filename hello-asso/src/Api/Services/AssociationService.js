import httpService from "../httpService";

const getInfo = (name) => {
    return httpService.get(`/organizations/${name}`);
};
const getEvents = (name) => {
    return httpService.get(`/organizations/${name}/forms`);
};
const login = (email, password) => {
    const response = httpService.post("/oauth2/token", {
            email,
            password,
    }, {withCredentials: true}
);
httpService.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
return response;
};
const AssociationService = {
getInfo,
getEvents,
login,
};
export default AssociationService;