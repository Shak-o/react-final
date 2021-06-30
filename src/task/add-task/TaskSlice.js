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
            //console.log('trying to save');
            action.payload.item.id = Date.now();
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
        updateTask: (state, action) => {
            console.log('update');
            console.log(action.payload.item.id);

            state.inProgress.forEach((item) => {
                if (
                    item.item.id.toString() ===
                    action.payload.item.id.toString()
                ) {
                    const index = state.inProgress.indexOf(item);
                    if (index > -1) {
                        state.inProgress.splice(index, 1);
                    }
                    if (action.payload.item.status === 'notStarted') {
                        state.notStarted.push(action.payload);
                    } else if (action.payload.item.status === 'inProgress') {
                        state.inProgress.push(action.payload);
                    } else if (action.payload.item.status === 'closed') {
                        state.closed.push(action.payload);
                    } else if (action.payload.item.status === 'ready') {
                        state.ready.push(action.payload);
                    }
                    console.log('entered if statement');
                }
            });
            state.notStarted.forEach((item) => {
                console.log(item.item.id.toString());
                if (
                    item.item.id.toString() ===
                    action.payload.item.id.toString()
                ) {
                    const index = state.notStarted.indexOf(item);
                    if (index > -1) {
                        state.notStarted.splice(index, 1);
                    }
                    if (action.payload.item.status === 'notStarted') {
                        state.notStarted.push(action.payload);
                    } else if (action.payload.item.status === 'inProgress') {
                        state.inProgress.push(action.payload);
                    } else if (action.payload.item.status === 'closed') {
                        state.closed.push(action.payload);
                    } else if (action.payload.item.status === 'ready') {
                        state.ready.push(action.payload);
                    }
                    console.log('entered if statement');
                }
            });
            state.ready.forEach((item) => {
                if (
                    item.item.id.toString() ===
                    action.payload.item.id.toString()
                ) {
                    const index = state.ready.indexOf(item);
                    if (index > -1) {
                        state.ready.splice(index, 1);
                    }
                    if (action.payload.item.status === 'notStarted') {
                        state.notStarted.push(action.payload);
                    } else if (action.payload.item.status === 'inProgress') {
                        state.inProgress.push(action.payload);
                    } else if (action.payload.item.status === 'closed') {
                        state.closed.push(action.payload);
                    } else if (action.payload.item.status === 'ready') {
                        state.ready.push(action.payload);
                    }
                    console.log('entered if statement');
                }
            });

            state.closed.forEach((item) => {
                if (
                    item.item.id.toString() ===
                    action.payload.item.id.toString()
                ) {
                    const index = state.closed.indexOf(item);
                    if (index > -1) {
                        state.closed.splice(index, 1);
                    }
                    if (action.payload.item.status === 'notStarted') {
                        state.notStarted.push(action.payload);
                    } else if (action.payload.item.status === 'inProgress') {
                        state.inProgress.push(action.payload);
                    } else if (action.payload.item.status === 'closed') {
                        state.closed.push(action.payload);
                    } else if (action.payload.item.status === 'ready') {
                        state.ready.push(action.payload);
                    }
                    console.log('entered if statement');
                }
            });
        },
    },
});

export const { saveTask, updateTask } = TaskSlice.actions;
export const InProgress = (state) => state.tasks.inProgress;
export const NotStarted = (state) => state.tasks.notStarted;
export const Ready = (state) => state.tasks.ready;
export const Closed = (state) => state.tasks.closed;
export default TaskSlice.reducer;
