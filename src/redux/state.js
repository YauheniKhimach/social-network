let store ={
    _state : {
        profilePage : {
            posts: [
                { id: 1, message: 'Hi, bro!', likeCount: 12 },
                { id: 2, message: 'How are you?', likeCount: 21 },
            ],
            newPostText : ['vrym']
        },
    
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Zenya' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Max' },
                { id: 4, name: 'Dima' },
                { id: 5, name: 'Nastya' },
            ],
    
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hello' },
                { id: 3, message: 'How are you?' },
            ],
        },
    
    
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('state')
    },
    subscribe(observer)  {
        this._callSubscriber = observer
    },
    dispatch(action) {
      if (action.type === 'ADD-POST') {
          let newPost = {
              id:5,
              message: this._state.profilePage.newPostText,
              likeCount:0,
          };

          this._state.profilePage.posts.push(newPost);
          this._state.profilePage.newPostText= '';
          this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-NEW-POST-TEXT' ) {
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber(this._state);
      }
    }
};

export default store;
window.store = store;