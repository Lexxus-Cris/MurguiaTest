import { Delete } from "@mui/icons-material"
import { IconButton, Tooltip } from "@mui/material"


export const DeleteBtn = () => {
    return (
        <Tooltip title='Borrar'>
            <IconButton edge="end" aria-label="borrar">
                <Delete color="error" />
            </IconButton>
        </Tooltip>
    )
}
