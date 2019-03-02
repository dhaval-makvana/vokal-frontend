import { REGISTER } from '../types';

const Initialize = {
    register: {}
}

export default function (state = Initialize, action) {
    switch(action.type) {
        case REGISTER:
            return Object.assign({}, state, { register: action.data });
        default: 
            return state;
    }
}
