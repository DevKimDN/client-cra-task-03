import axios from 'axios'

export default class AuthAPI {
    static checkStatus ({
        token
    }) {
        console.log("Client: go to check status !")
        return axios.get(process.env.REACT_APP_SERVER_URL+'/api/status', {
            headers: {
                authorization: token
            }
        })
    }
}
