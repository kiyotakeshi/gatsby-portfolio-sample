import React from 'react';
import * as styles from './HatebloItem.module.css';

const HatebloItem = (props) => {
    const { title, link, pubDate } = props.post;
    return (
        <div className={styles.container}>
            <a href={link}>
                <span className={styles.date}>{pubDate}</span>
                <span className={styles.title}>{title}</span>
            </a>
        </div>
    );
};

export default HatebloItem;
