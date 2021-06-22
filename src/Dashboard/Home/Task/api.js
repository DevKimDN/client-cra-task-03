import axios from 'axios'

export default class TaskAPI {
    static updateTask ({
        _id,
        status,
        title
    }) {
        return axios.put(process.env.REACT_APP_SERVER_URL+`/api/tasks/${_id}`, {
            status,
            title
        }, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }

    static deleteTask ({
        _id
    }) {
        return axios.delete(process.env.REACT_APP_SERVER_URL+`/api/tasks/${_id}`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
    }
}
