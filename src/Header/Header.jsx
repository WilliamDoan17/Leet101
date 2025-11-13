import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const Header = ({ author, appName }) => {
    return (
        <div 
            className={styles.container}
        >
            <div
                className={styles['app-info']}
            > 
                <p className={`${styles['app-info']} ${styles['app-name']}`}>{appName}</p>
                <p className={`${styles['app-info']} ${styles.author}`}>by {author}</p>
            </div>
        </div>
    )
}

export default Header;