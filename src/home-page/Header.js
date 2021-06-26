import React from 'react';
import styles from './header.module.css';

export default function Header(props) {
    const getColor = () => {
        if (props.value.name === 'Not Started') {
            return '#ffffff';
        } else if (props.value.name === 'In Progress') {
            return '#b9e5ff';
        } else if (props.value.name === 'Closed') {
            return '#d1ffd9';
        }
    };
    return (
        <div
            className={styles.headerNormal}
            style={{ backgroundColor: getColor() }}>
            <h2>{props.value.name}</h2>
        </div>
    );
}
