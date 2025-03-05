import { Delete } from "@mui/icons-material"
import { IconButton, Tooltip } from "@mui/material"
import { errorAlert, successAlert } from "../../../store/slice/alertSlice";
import { useEffect } from "react";


export const DeleteBtn = ({ id, triggerDelete, isSuccess, isError, dispatch }) => {

    useEffect(() => {
        if (isSuccess) {
            dispatch(successAlert('Se ha eliminado exitosamente'))
        } else if (isError) {
            dispatch(errorAlert('No se pudo eliminar'));
        }
    }, [isSuccess, isError])

    return (
        <Tooltip title='Borrar'>
            <IconButton edge="end" aria-label="borrar" onClick={() => triggerDelete(id)}>
                <Delete color="error" />
            </IconButton>
        </Tooltip>
    )
}
