import {
    spawn
} from 'redux-saga/effects'

import authSaga from './Auth/sagas'
import loginSaga from './Auth/Login/sagas'
import signupSaga from './Auth/Signup/sagas'
import forgotSaga from './Auth/Forgot/sagas'
import resetSaga from './Auth/Reset/sagas'
import getTasksSaga from './Dashboard/Home/TaskList/sagas'
import addTaskSaga from './Dashboard/Home/NewTask/sagas'
import { updateTaskSaga, deleteTaskSaga } from './Dashboard/Home/Task/sagas'

function* sagas () {
    yield spawn(authSaga)
    yield spawn(loginSaga)
    yield spawn(signupSaga)
    yield spawn(forgotSaga)
    yield spawn(resetSaga)
    yield spawn(getTasksSaga)
    yield spawn(addTaskSaga)
    yield spawn(updateTaskSaga)
    yield spawn(deleteTaskSaga)
}

export default sagas
