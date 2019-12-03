import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/users.jpg'

let Users = (props) => {
    let getUsers = () =>
    {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            props.setUsers(response.data.items)
        })
    }
    }

    return <div>
        <button onClick={getUsers}>Get Useers</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img src={u.photos.small !=null ? u.photos.small: userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() =>{props.unfollow(u.id)}}>UnFollow</button>
                        :<button onClick={() =>{props.follow(u.id)}}>Follow</button> }

                </div>
            </span>
                <span>
                    <spam>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </spam>
                    <spam>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </spam>
                </span>
            </div>)
        }
    </div>
};

export default Users;