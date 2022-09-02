import httpService from "../httpService";

//create login service with access_token and refresh_token
const loginService = {
    login: async (email, password) => {
        const data = {
            email,
            password
        };
        const response = await httpService.post('/oauth2/token',{
            data}, {withCredentials: true});
            httpService.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
        return response;
    },
    //logout
    // logout: async () => {
    //     const response = await httpService.post('/oauth2/revoke',{
    //         data}, {withCredentials: true});
    //         httpService.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
    //     return response;
    // }

}
export default loginService;