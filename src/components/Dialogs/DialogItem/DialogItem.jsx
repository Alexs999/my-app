import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + " " + s.active}>
       <img src='https://avatars.mds.yandex.net/get-pdb/872807/7a1b04e5-f194-4558-b3cc-765d724ba6fa/s1200?webp=false'/>
       <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;