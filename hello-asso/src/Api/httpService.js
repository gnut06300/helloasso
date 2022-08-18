import axios from  'axios';

const httpService = axios.create({
    BaseURL: '',
    timeout: 1799,
    
})
export default httpService;