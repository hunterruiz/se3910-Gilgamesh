import axios from 'axios';

// uses axios to post to the backend local host when called for login function
class LoginAuth{
    login(credentials){
        return axios.post('http://localhost:8080/api/login', credentials);
      }
}

export default new LoginAuth;
