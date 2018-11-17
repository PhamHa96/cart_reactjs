import * as Types from './../constants/ActionType'
import * as mess from './../constants/Message'

var initialState = mess.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE: // Types giup phan biet cac dau vao action khac nhau
            return action.message;
        default: return [...state];
    }
}

export default message;