import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const Header = ({ author, appName }) => {
    const solutionsLink = 'https://williamdoan17.github.io/Leet101-Forum/';

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
            <nav
                className = {`${styles['navigation']}`}
            >
                <a 
                    className = {`${styles['navigation-button']}`}
                    href = {solutionsLink}
                    target = '_blank'
                >
                    Solutions
                </a>
            </nav>
        </div>
    )
}

export default Header;