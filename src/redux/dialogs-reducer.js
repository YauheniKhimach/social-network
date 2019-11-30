const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState ={
    dialogs: [
        {id: 1, name: 'Zenya'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Nastya'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
               };
        case SEND_MESSAGE:
            let body = state.newMessageBody ;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () =>({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type:UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;