import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://s1.1zoom.ru/big0/540/Sea_Moon_Night_Horizon_563244_1280x818.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.ava}><img src=' https://avatars.mds.yandex.net/get-pdb/1336853/25a1115f-c52f-402e-8f46-b97c9b660bc3/s1200' align="top"/>
                    Aleksandr S.</div>

            </div>
        </div>)
}
export default ProfileInfo;