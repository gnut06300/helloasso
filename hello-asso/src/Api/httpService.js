import axios from "axios";

//instance axios with token and refresh_token 
const httpService = axios.create({
    baseURL: "https://api.helloasso.com/v5",
    data: {
        'client_id': '144e28340abf4ef6b58f05b9236c286f',
        'client_secret': 'r/he6JiM6qlOFq2BzZmE6Y9wPHk18t5t',
        'grant_type': 'client_credentials',
    },
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token")
    }
});
export default httpService;