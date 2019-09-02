import React from 'react';
import s from './Sitebar.module.css';
import {NavLink} from "react-router-dom";

const  Sitebar =(props)=> {

        let path = "/Sitebar/" + props.state.navbar.id;
        return <div className={s.Sitebar}>
            <div>{props.state.navbar.name}</div>
        </div>
    }

export default Sitebar;