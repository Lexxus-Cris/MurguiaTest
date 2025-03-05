import { useEffect } from "react";
import { Star, StarOutline } from "@mui/icons-material"
import { Checkbox, IconButton, Tooltip } from "@mui/material"
import { errorAlert, successAlert } from "../../../store/slice/alertSlice";


export const CheckboxDestacar = ({ tarea, triggerPut, isSuccess, isError, dispatch }) => {

    const completedTask = {
        ...tarea,
        destacada: !tarea.destacada
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(successAlert("La tarea se ha actualizado correctamente"));
        } else if (isError) {
            dispatch(errorAlert("La tarea no pudo ser actualizada"));
        }
    }, [isSuccess, isError]);

    return (
        <Tooltip title='Destacar'>
            <IconButton onClick={() => dispatch(triggerPut(completedTask))}>
                <Checkbox
                    slotProps={{ root: { className : '!contents'}}}
                    edge='start'
                    defaultChecked={tarea.destacada}
                    tabIndex={-1}
                    disableRipple
                    icon={<StarOutline />}
                    checkedIcon={<Star color="warning" />}
                />
            </IconButton>
        </Tooltip>
    )
}
