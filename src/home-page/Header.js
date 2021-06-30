import React from 'react';
import styles from './header.module.css';

export default function Header(props) {
    const getColor = () => {
        if (props.value.name === 'Not Started') {
            return '#ffffff';
        } else if (props.value.name === 'In Progress') {
            return '#aad7ee';
        } else if (props.value.name === 'Closed') {
            return '#98ec89';
        } else if (props.value.name === 'Ready') {
            return '#89ccec';
        }
    };

    return (
        <div
            className={styles.headerNormal}
            style={{ backgroundColor: getColor() }}>
            <p>{props.value.name}</p>
        </div>
    );
}
