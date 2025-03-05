
import { useEffect } from 'react';
import { errorAlert, successAlert } from '../../../store/slice/alertSlice';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Checkbox, IconButton, Tooltip } from '@mui/material';

export const CheckboxRadio = ({ tarea, triggerPut, isSuccess, isError, dispatch }) => {

    const completedTask = {
        ...tarea,
        completada: true
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(successAlert("Tarea completada"));
        } else if (isError){
            dispatch(errorAlert("La tarea no pudo ser completada"));
        }
    }, [isSuccess]);

    return (
        <Tooltip title='Completar'>
            <IconButton className='!mr-1' onClick={() => dispatch(triggerPut(completedTask))}>
                <Checkbox
                    slotProps={{ root: { className : '!contents'}}}
                    edge='start'
                    tabIndex={-1}
                    disableRipple
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<RadioButtonChecked />}
                />
            </IconButton>
        </Tooltip>
    )
}
