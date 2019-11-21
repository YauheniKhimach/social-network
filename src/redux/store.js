import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, bro!', likeCount: 12},
                {id: 2, message: 'How are you?', likeCount: 21},
            ],
            newPostText: ['vrym']
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('store.js')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);

    }
};




export default store;
window.store = store;