import axios from '../../node_modules/axios';

const USER_API_BASE_URL = "http://localhost:8081/api/v1/users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        console.log(user)


        try {
            console.log("yes")
            return axios.post(USER_API_BASE_URL,user);
            // return response.data;


        }
        catch (e) {
            console.log("No")
        }
               }

    getEmployeeById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

}

export default new UserService()