import { IconButton, Tooltip } from "@mui/material"
import { Edit } from "@mui/icons-material"
import { getTaskData } from "../../../store/slice/tareaSlice"

export const EditBtn = ({ tarea, dispatch }) => {

    return (
        <Tooltip title='Editar'>
            <IconButton onClick={() => dispatch(getTaskData(tarea))}>
                <Edit color="info" />
            </IconButton>
        </Tooltip>
    )
}
