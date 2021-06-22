import axios from 'axios'

export default class SignupAPI {
    static signup ({
        name,
        email,
        password
    }) {
        return axios.post(process.env.REACT_APP_SERVER_URL+'/api/users', {
            name,
            email,
            password
        })
    }
}
