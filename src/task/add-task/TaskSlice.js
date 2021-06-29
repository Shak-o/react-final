import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inProgress: [],
    notStarted: [],
    ready: [],
    closed: [],
};

const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        saveTask: (state, action) => {
            console.log('trying to save');
            console.log(action.payload.item.id);
            let status = action.payload.item.status;
            if (status === 'inProgress') {
                state.inProgress.push(action.payload);
            } else if (status === 'notStarted') {
                state.notStarted.push(action.payload);
            } else if (status === 'ready') {
                state.ready.push(action.payload);
            } else if (status === 'closed') {
                state.ready.push(action.payload);
            }
        },
        // setCheck: (state, action) => {
        //     // eslint-disable-next-line array-callback-return
        //     state.todoList.map((item) => {
        //         if (action.payload === item.id) {
        //             item.done = item.done !== true;
        //             return '';
        //         }
        //     });
        // },
    },
});

export const { saveTask } = TaskSlice.actions;
export const InProgress = (state) => state.tasks.inProgress;
export const NotStarted = (state) => state.tasks.notStarted;
export const Ready = (state) => state.tasks.ready;
export const Closed = (state) => state.tasks.closed;
export default TaskSlice.reducer;
