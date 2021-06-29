import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from '../task/add-task/TaskSlice';

export default configureStore({
    reducer: {
        tasks: TaskReducer,
    },
});
