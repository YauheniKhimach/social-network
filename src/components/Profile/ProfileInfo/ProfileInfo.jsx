import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div>
    <div>
      <img src='https://pp.userapi.com/c633716/v633716413/1c8a5/Ozn3Gc3Jvv8.jpg'></img>
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large}/>
      AVA + .....
    </div>
   
  </div>
}

export default ProfileInfo;
