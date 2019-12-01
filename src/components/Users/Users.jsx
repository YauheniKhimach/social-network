import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
                    followed: false,
                    fullName: 'Max',
                    status: 'I\'m student',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
                    followed: true,
                    fullName: 'Nastya',
                    status: 'I\'m student',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
                    followed: true,
                    fullName: 'Nikita',
                    status: 'I\'m student',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I\'m sportsmen',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() =>{props.unfollow(u.id)}}>UnFollow</button>
                        :<button onClick={() =>{props.follow(u.id)}}>Follow</button> }

                </div>
            </span>
                <span>
                    <spam>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </spam>
                    <spam>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </spam>
                </span>
            </div>)
        }
    </div>
};

export default Users;