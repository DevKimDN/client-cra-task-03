import axios from 'axios'

export default class AuthAPI {
    static checkStatus ({
        token
    }) {
        return axios.get(process.env.REACT_APP_SERVER_URL+'/api/status', {
            headers: {
                authorization: token
            }
        })
    }
}
