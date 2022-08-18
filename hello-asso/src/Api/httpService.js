import axios from  'axios';
// ajout intercepteur de request
axios.interceptors.request.use(
    function (config) {
        // Faire  avant que la demande ne soit envoyée
        config.headers.Authorization = `Bearer ${your_token}`;
        // ou config.headers.common['Authorization'] = `Bearer ${your_token}` ;
        config.baseURL = '';//mettre url test api

        return config;
    },
    function (error) {
        // les erreurs
        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};