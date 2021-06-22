import axios from 'axios'

export default class NewTaskAPI {
    static addTask ({
        title
    }) {
        return axios.post(process.env.REACT_APP_SERVER_URL+'/api/tasks', {
            title
        }, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }
}
