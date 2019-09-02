import React from 'react';
import s from './Post.module.css';
import { tsPropertySignature } from '@babel/types';

const Post = (props) => {
console.log(props.message);
  return  (<div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_gyGxFkONmDZMJq0_sFm3hE6BUsrcIoZWYEC6qcbjvdt2FHxZg' />
        { props.message }<br/>
        <span>like </span>

{ props.likesCount }
</div>

)
     
}
export default Post;