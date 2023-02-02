import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return  <div className={s.content}>
    <div>
       <img src='https://phonoteka.org/uploads/posts/2021-06/1624306054_56-phonoteka_org-p-oboi-plyazh-krasivo-65.jpg'/>
    </div>
    <div>
      ava + description
    </div>
    <div>
      my posts
      <div>
        new post
    </div>
    <div className={s.posts}>
      <div className={s.item}>
        post 1
      </div>
      <div className='item'>
        post 2 
      </div>
      </div>
    </div>
  </div>
}

export default Profile;