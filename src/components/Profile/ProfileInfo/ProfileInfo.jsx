import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://s1.1zoom.ru/big0/540/Sea_Moon_Night_Horizon_563244_1280x818.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava +description
            </div>
        </div>)
}
export default ProfileInfo;