import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let postsElements = props.posts.map (p => <Post message={p.message} likeCount={p.likeCount} />);

    let addPost = () =>{
        // props.addPost()
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text)
        //   props.dispatch({type:'UPDATE-NEW-POST-TEXT' , newText: text})
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return <div className={s.postsBlock}>
        <h4>my post</h4>
        <div>
            <div>
        <textarea ref={newPostElement} onChange={onPostChange}
                  value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;