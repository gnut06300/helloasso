import axios from "axios";
import TokenService from './tokenService';

const httpService = axios.create({
    baseURL: "https://api.helloasso.com/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    
});
httpService.interceptors.request.use(
    (config) => {
        const token = TokenService.getLocalRefreshToken();
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token; // spring-boot or php
            config.headers["x-access-token"] = token; // node js backend
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    httpService.interceptors.response.use(
        (resp) => {
            return resp;
        },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/oauth2" && err.response) {
          //L'access token a expiré
            if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const rs = await httpService.post("/auth/refreshtoken", {
                refreshToken: TokenService.getLocalRefreshToken(),
            });
                const { accessToken } = rs.data;
                TokenService.updateLocalAccessToken(accessToken);
                return originalConfig;
            } catch (_error) {
                    return Promise.reject(_error);
            }
        }
    }
        return Promise.reject(err);
    }
);
    


export default httpService;