import httpService from '../httpService';
import TokenService from '../tokenService';
class AuthService {
    async login(username, password) {
        try {
            const response = await httpService.post('/signin', {
                username,
                password,
            });
            if (response.data.accessToken) {
                TokenService.setUser(response.data);
            }
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    logout() {
        TokenService.removeItem('user');
    }
    register(username, email, password) {
        return httpService.post('/auth/signup', {
            username,
            email,
            password,
        });
    }
    getCurrentUser() {
        return TokenService.getUser();
    }

}

export default new AuthService();