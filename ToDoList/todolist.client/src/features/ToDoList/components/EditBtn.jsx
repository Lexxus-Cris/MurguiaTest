import { IconButton, Tooltip } from "@mui/material"
import { Edit } from "@mui/icons-material"

export const EditBtn = ({ editToDo }) => {
    return (
        <Tooltip title='Editar'>
            <IconButton onClick={editToDo}>
                <Edit color="info" />
            </IconButton>
        </Tooltip>
    )
}
