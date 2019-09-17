import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://memepedia.ru/wp-content/uploads/2019/03/mem-kot-tom-19.jpg' />
      {props.message}
      <div>
        <span>like</span> {props.likeCount}
      </div>

    </div>
  )
}

export default Post;
