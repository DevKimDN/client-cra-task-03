import axios from 'axios'

export default class TaskListAPI {
    static getTasks () {
        return axios.get(process.env.REACT_APP_SERVER_URL+'/api/tasks', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }
}
