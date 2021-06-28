import Header from './Header';
import NavBar from './NavBar';
import Task from '../task/task-form/Task';
import React from 'react';
import TaskForm from '../task/add-task/TaskForm';
import styles from '../task/add-task/popup.module.css';
export default function HomePage() {
    let notStarted = [
        {
            id: 'HR-124',
            name: 'get new points',
            description:
                'goto end of the world find dragon kill dragon and etc. etc. etc.',
            type: 'Dev',
            status: 'notStarted',
        },
        {
            id: 'HR-15224',
            name: 'get new points',
            description:
                'goto end of the world find dragon kill dragon and etc. etc. etc.',
            type: 'QA',
            status: 'notStarted',
        },
    ];

    let inProgress = [
        {
            id: 'HR-124',
            name: 'get new points',
            description:
                'goto end of the world find dragon kill dragon and etc. etc. etc.',
            type: 'Dev',
            status: 'inProgress',
        },
        {
            id: 'HR-1244',
            name: 'jump from building',
            description:
                'goto end of the world find dragon kill dragon and etc. etc. etc.',
            type: 'QA',
            status: 'inProgress',
        },
    ];
    let closed = [
        {
            id: 'HR-124',
            name: 'get new points',
            description:
                'goto end of the world find dragon kill dragon and etc. etc. etc.',
            type: 'Dev',
            status: 'closed',
        },
        {
            id: 'HR-1244',
            name: 'jump from building',
            description:
                'goto end of the world find dragon kill dragon and etc. etc. etc.',
            type: 'QA',
            status: 'closed',
        },
    ];
    let ready = [
        {
            id: 'HR-124',
            name: 'get new points',
            description:
                'goto end of the world find dragon kill dragon and etc. etc. etc.',
            type: 'Dev',
            status: 'ready',
        },
        {
            id: 'HR-1244',
            name: 'jump from building',
            description:
                'goto end of the world find dragon kill dragon and etc. etc. etc.',
            type: 'QA',
            status: 'ready',
        },
    ];

    const getWidth = () => {
        if (window.innerWidth < 1896) {
            return 'col-3 mh-100 ms-4 me-4 ps-3 pe-3 pt-1 d-block';
        } else {
            return 'col-3 mh-100 ms-5 me-5 ps-3 pe-3 pt-1 d-block';
        }
    };
    const backStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'fixed',
    };
    return (
        <div>
            <div style={backStyle}>
                <TaskForm trigger={false} />
            </div>

            <NavBar />
            <div
                className="row"
                style={{ marginTop: 10, height: window.innerHeight }}>
                <div
                    className={getWidth()}
                    style={{
                        backgroundColor: '#b5b5b5',
                        width: '20%',
                        borderRadius: '5px',
                    }}>
                    <Header value={{ name: 'Not Started' }} />
                    {notStarted.map((item) => (
                        <Task
                            name={item.name}
                            status={item.status}
                            id={item.id}
                            type={item.type}
                            description={item.description}
                        />
                    ))}
                </div>
                <div
                    className={getWidth()}
                    style={{
                        backgroundColor: '#b5b5b5',
                        width: '20%',
                        borderRadius: '5px',
                    }}>
                    <Header value={{ name: 'In Progress' }} />
                    <Task />
                    <Task />
                    <Task />
                </div>
                <div
                    className={getWidth()}
                    style={{
                        backgroundColor: '#b5b5b5',
                        width: '20%',
                        borderRadius: '5px',
                    }}>
                    <Header value={{ name: 'Ready' }} />
                    <Task />
                </div>
                <div
                    className={getWidth()}
                    style={{
                        backgroundColor: '#b5b5b5',
                        width: '20%',
                        borderRadius: '5px',
                    }}>
                    <Header value={{ name: 'Closed' }} />
                </div>
            </div>
        </div>
    );
}
