import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../../store/slice/alertSlice';

import { Alert, Container } from '@mui/material';
import { Typography } from '@mui/material';

import CompletedListView from '../views/CompletedListView';
import ToDoListView from '../views/ToDoListView';
import AddToDoView from './../views/AddToDoView';
import EditToDoView from '../views/EditToDoView';

const ToDoListPage = () => {

    const { open, type, description } = useSelector(state => state.alert);
    const { showInputUpdate } = useSelector(state => state.task);
    const dispatch = useDispatch();

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                dispatch(closeAlert())
            }, 9000);
        }
    }, [open]);

    return (
        <>
            {open
                ? <Alert
                    severity={type}
                    className='absolute w-fit max-w-full md:top-20 -right-0'
                    onClose={() => dispatch(closeAlert())}
                >
                    {description}
                </Alert>
                : null
            }
            <Container className='!max-w-md !my-10 bg-stone-100 py-6'>
                <Typography variant='h5' className='text-slate-500 !mb-4'>To Do</Typography>
                <AddToDoView />

                {
                    showInputUpdate
                        ? <EditToDoView />
                        : null
                }
                
                <ToDoListView />
                <CompletedListView />
            </Container>
        </>
    )
}
export default ToDoListPage;
