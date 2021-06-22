import axios from 'axios'

export default class ForgotAPI {
    static forgot ({
        email
    }) {
        return axios.post(process.env.REACT_APP_SERVER_URL+'/api/forgot', {
            email
        })
    }
}
