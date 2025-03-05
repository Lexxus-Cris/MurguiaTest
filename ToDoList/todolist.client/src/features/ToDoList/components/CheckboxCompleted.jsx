import { TaskAlt } from "@mui/icons-material"
import { Checkbox, IconButton } from "@mui/material"

export const CheckboxCompleted = () => {
    return (
        <IconButton>
            <Checkbox
                slotProps={{ root: { className: '!contents' } }}
                edge='start'
                tabIndex={-1}
                disableRipple
                checkedIcon={<TaskAlt color="success" />}
                defaultChecked
            />
        </IconButton>
    )
}
