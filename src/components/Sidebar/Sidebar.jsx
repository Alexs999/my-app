import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const  Sidebar =(props)=> {

        let path = "/sidebar/" + props.state.sidebar.id;
        return <div className={s.Sidebar}>
            <div>{props.state.sidebar.name}</div>
        </div>
    }

export default Sidebar;