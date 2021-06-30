import Header from './Header';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { InProgress } from '../task/add-task/TaskSlice';
import { NotStarted } from '../task/add-task/TaskSlice';
import { Closed } from '../task/add-task/TaskSlice';
import { Ready } from '../task/add-task/TaskSlice';
import Task from '../task/task-form/Task';
import TaskForm from '../task/add-task/TaskForm';

export default function HomePage() {
    const [update, setUpdate] = useState();
    const inProgress = useSelector(InProgress);
    const notStarted = useSelector(NotStarted);
    const closed = useSelector(Closed);
    const ready = useSelector(Ready);
    const getWidth = () => {
        if (window.innerWidth < 1896) {
            return 'col-3 ms-4 me-4 ps-3 pe-3 pt-1 ';
        } else {
            return 'col-3 ms-5 me-5 ps-3 pe-3 pt-1 ';
        }
    };
    const backgroundStyle = {
        backgroundColor: '#b5b5b5',
        width: '20%',
        borderRadius: '5px',
        height: '100%',
        display: 'block',
    };
    return (
        <div>
            <div
                className="row"
                style={{ marginTop: 10, height: window.innerHeight }}>
                <div className={getWidth()} style={backgroundStyle}>
                    <Header value={{ name: 'Not Started' }} />
                    {notStarted.map((task) => (
                        <span
                            onClick={() => {
                                setUpdate(
                                    <TaskForm update={true} task={task} />,
                                );
                            }}>
                            <Task
                                name={task.item.name}
                                status={task.item.status}
                                id={task.item.id}
                                type={task.item.type}
                                description={task.item.description}
                            />
                        </span>
                    ))}
                </div>
                <div className={getWidth()} style={backgroundStyle}>
                    <Header value={{ name: 'In Progress' }} />
                    {inProgress.map((task) => (
                        <span
                            onClick={() => {
                                setUpdate(
                                    <TaskForm update={true} task={task} />,
                                );
                            }}>
                            <Task
                                name={task.item.name}
                                status={task.item.status}
                                id={task.item.id}
                                type={task.item.type}
                                description={task.item.description}
                            />
                        </span>
                    ))}
                </div>
                <div className={getWidth()} style={backgroundStyle}>
                    <Header value={{ name: 'Ready' }} />
                    {ready.map((task) => (
                        <span
                            onClick={() => {
                                setUpdate(
                                    <TaskForm update={true} task={task} />,
                                );
                            }}>
                            <Task
                                name={task.item.name}
                                status={task.item.status}
                                id={task.item.id}
                                type={task.item.type}
                                description={task.item.description}
                            />
                        </span>
                    ))}
                </div>
                <div className={getWidth()} style={backgroundStyle}>
                    <Header value={{ name: 'Closed' }} />
                    {closed.map((task) => (
                        <span
                            onClick={() => {
                                setUpdate(
                                    <TaskForm update={true} task={task} />,
                                );
                            }}>
                            <Task
                                name={task.item.name}
                                status={task.item.status}
                                id={task.item.id}
                                type={task.item.type}
                                description={task.item.description}
                            />
                        </span>
                    ))}
                </div>
            </div>
            {update}
        </div>
    );
}
