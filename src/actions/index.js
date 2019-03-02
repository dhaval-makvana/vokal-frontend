import { LOGIN, REGISTER } from '../types';
import axios from 'axios';

export const Register = data => async dispatch => {

    console.log("data action", data);

    const res = await axios.post(`/api/register`, data);

    try {
        console.log("yes registered", res);
        let registerObject = {
            name: res.data.user.name,
            email: res.data.user.email,
            contactNumber: res.data.user.contactNumber
        }

        let action = {
            type: REGISTER,
            data: registerObject
        }

        dispatch (action);
    } catch(err) {
        return err;
    }
}

export const Login = data => async dispatch => {

    const res = await axios.post(`/api/login`, data);

    try {
        // console.log("yes loginn", res);
    } catch(err) {
        return err;
    }
}