const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, bro!', likeCount: 12},
        {id: 2, message: 'How are you?', likeCount: 21},
    ],
    newPostText: ['vrym']
}

const profileReducer = (state = initialState,action) => {

    switch(action.type) {
        case  ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
            };
        default:
            return state
    }


};
export const addPostActionCreator = () =>({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type:UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;