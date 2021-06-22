import {
    combineReducers
} from 'redux'

import authReducers from './Auth/reducers'
import loginReducers from './Auth/Login/reducers'
import signupReducers from './Auth/Signup/reducers'
import forgotReducers from './Auth/Forgot/reducers'
import resetReducers from './Auth/Reset/reducers'
import navbarReducers from './Common/Navbar/reducers'
import homeReducers from './Dashboard/Home/reducers'

export default combineReducers({
    auth: authReducers,
    login: loginReducers,
    signup: signupReducers,
    forgot: forgotReducers,
    reset: resetReducers,
    navbar: navbarReducers,
    home: homeReducers
})
