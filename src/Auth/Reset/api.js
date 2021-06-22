import axios from 'axios'

export default class ResetAPI {
    static reset ({
        password,
        rePassword,
        token
    }) {
        return axios.post(process.env.REACT_APP_SERVER_URL+'/api/reset', {
            password,
            rePassword,
            token
        })
    }
}
