import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let newPostElement = React.createRef()

    let postsElements = props.posts.map (p => <Post message={p.message} likeCount={p.likeCount} />);

    let onAddPost = () =>{
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    };

    return <div className={s.postsBlock}>
        <h4>my post</h4>
        <div>
            <div>
        <textarea ref={newPostElement} onChange={onPostChange}
                  value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;