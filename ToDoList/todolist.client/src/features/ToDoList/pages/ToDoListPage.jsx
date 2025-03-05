import CompletedListView from '../views/CompletedListView';
import ToDoListView from '../views/ToDoListView';
import { Container } from '@mui/material';
import AddToDoView from './../views/AddToDoView';
import { Typography } from '@mui/material';
import EditToDoView from '../views/EditToDoView';

const ToDoListPage = () => {
    return (
        <Container className='!max-w-md !my-10 bg-stone-100 py-6'>
            <Typography variant='h5' className='text-slate-500 !mb-4'>To Do</Typography>
            <AddToDoView />
            <EditToDoView />
            <ToDoListView />
            <CompletedListView />
        </Container>
    )
}
export default ToDoListPage;
