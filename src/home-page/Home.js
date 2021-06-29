import Header from './Header';
import React from 'react';
import { useSelector } from 'react-redux';
import { InProgress } from '../task/add-task/TaskSlice';
import { NotStarted } from '../task/add-task/TaskSlice';
import { Closed } from '../task/add-task/TaskSlice';
import { Ready } from '../task/add-task/TaskSlice';
import Task from '../task/task-form/Task';

export default function HomePage() {
    const inProgress = useSelector(InProgress);
    const notStarted = useSelector(NotStarted);
    const closed = useSelector(Closed);
    const ready = useSelector(Ready);
    const getWidth = () => {
        if (window.innerWidth < 1896) {
            return 'col-3 mh-100 ms-4 me-4 ps-3 pe-3 pt-1 d-block';
        } else {
            return 'col-3 mh-100 ms-5 me-5 ps-3 pe-3 pt-1 d-block';
        }
    };

    return (
        <div>
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
                    {notStarted.map((task) => (
                        <Task
                            name={task.item.name}
                            status={task.item.status}
                            id={task.item.id}
                            type={task.item.type}
                            description={task.item.description}
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
                    {inProgress.map((task) => (
                        <Task
                            name={task.item.name}
                            status={task.item.status}
                            id={task.item.id}
                            type={task.item.type}
                            description={task.item.description}
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
                    <Header value={{ name: 'Ready' }} />
                    {ready.map((task) => (
                        <Task
                            name={task.item.name}
                            status={task.item.status}
                            id={task.item.id}
                            type={task.item.type}
                            description={task.item.description}
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
                    <Header value={{ name: 'Closed' }} />
                    {closed.map((task) => (
                        <Task
                            name={task.item.name}
                            status={task.item.status}
                            id={task.item.id}
                            type={task.item.type}
                            description={task.item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
