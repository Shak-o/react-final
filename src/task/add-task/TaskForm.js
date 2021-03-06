import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveTask } from './TaskSlice';
import React, { useState } from 'react';
import { updateTask } from './TaskSlice';

export default function TaskForm({ update, task }) {
    const [date, setDate] = useState(Date.now);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const addTask = (data) => {
        setDate(Date.now);
        dispatch(
            saveTask({
                item: data,
            }),
        );
    };
    const editTask = (data) => {
        dispatch(
            updateTask({
                item: data,
            }),
        );
    };
    if (update) {
        return (
            <div>
                <form
                    className="me-2 ms-2 mt-3"
                    onSubmit={handleSubmit(editTask)}>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={task.item.name}
                                {...register('name', { required: true })}
                            />
                        </div>
                        <div className="col">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register('type', { required: true })}>
                                <option value={task.item.type} selected>
                                    {task.item.type}
                                </option>
                                <option value="Dev">Development</option>
                                <option value="QA">Testing</option>
                                <option value="Epic">Epic</option>
                                <option value="Feature">Feature</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <select
                                className="form-select"
                                {...register('status', { required: true })}>
                                <option value={task.item.status} selected>
                                    {task.item.status}
                                </option>
                                <option value="notStarted">Not started</option>
                                <option value="inProgress">In Progress</option>
                                <option value="ready">Ready</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>

                        <div className="col">
                            <input
                                className="form-control"
                                type="text"
                                placeholder={'id:' + date}
                                aria-label="Disabled input example"
                                value={task.item.id}
                                {...register('id', { required: true })}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            aria-label="With textarea"
                            placeholder={task.item.description}
                            {...register('description', { required: true })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <form
                    className="me-2 ms-2 mt-3"
                    onSubmit={handleSubmit(addTask)}>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Task name"
                                aria-label="Task name"
                                {...register('name', { required: true })}
                            />
                        </div>
                        <div className="col">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register('type', { required: true })}>
                                <option selected>Task type</option>
                                <option value="Dev">Development</option>
                                <option value="QA">Testing</option>
                                <option value="Epic">Epic</option>
                                <option value="Feature">Feature</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register('status', { required: true })}>
                                <option selected>Task status</option>
                                <option value="notStarted">Not started</option>
                                <option value="inProgress">In Progress</option>
                                <option value="ready">Ready</option>
                                <option value="closed">Closed</option>
                            </select>
                        </div>

                        <div className="col">
                            <input
                                className="form-control"
                                type="text"
                                placeholder={'id:' + date}
                                aria-label="Disabled input example"
                                value={date}
                                {...register('id', { required: true })}
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            aria-label="With textarea"
                            {...register('description', { required: true })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
