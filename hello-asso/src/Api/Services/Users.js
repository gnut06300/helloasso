// import axios from 'axios';
// import auhtHeader from './auth-header';
import httpService from '../httpService';

const URL_DE_TEST = 'https://api.helloasso.com/oauth2';

class UserService {
    getUser() {
        return httpService.get('/users/me');
    }
    getInfo() {
        return httpService.get('/info');
    }
    getUserByEmail(email) {
        return httpService.get('/email');
    }
    
}