import { Cancel } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { clearTaskState } from '../../../store/slice/tareaSlice'
import { useDispatch } from 'react-redux'

export const CancelEditBtn = () => {
    const dispatch = useDispatch();
    return (
        <Tooltip title='Cancelar edición'>
            <IconButton onClick={() => dispatch(clearTaskState())}>
                <Cancel color="action" />
            </IconButton>
        </Tooltip>
    )
}
