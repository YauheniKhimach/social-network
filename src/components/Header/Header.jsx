import React from 'react';
import s from './Header.module.css';



const Header = () => {
    return <header className={s.header}>
        <img src='https://git-scm.com/images/logos/downloads/Git-Icon-Black.png'></img>
    </header>
}

export default Header;