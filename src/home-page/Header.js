import React from 'react';
import styles from './header.module.css';
import Task from '../task/task-form/Task';

export default function Header(props) {
    //const myStyle = f;
    const getHeight = () => {
        return window.innerHeight;
    };

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

    const getWidth = () => {
        if (window.innerWidth < 1896) {
            return 'col-3 mh-100 ms-4 me-4 ps-3 pe-3 pt-1 d-block';
        } else {
            return 'col-3 mh-100 ms-5 me-5 ps-3 pe-3 pt-1 d-block';
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
