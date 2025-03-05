import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { errorAlert, successAlert } from "../../../store/slice/alertSlice";

import { RadioButtonUnchecked, TaskAlt } from "@mui/icons-material"
import { Checkbox, IconButton } from "@mui/material"

export const CheckboxCompleted = ({ tarea, triggerPut, isSuccess, isError }) => {

    const dispatch = useDispatch();

    const toDoTask = {
        ...tarea,
        completada: false,
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(successAlert("Tarea completada"));
        } else if (isError) {
            dispatch(errorAlert("La tarea no pudo ser completada"));
        }
    }, [isSuccess]);
    return (
        <IconButton className="!mr-1" onClick={() => dispatch(triggerPut(toDoTask))}>
            <Checkbox
                slotProps={{ root: { className: '!contents' } }}
                edge='start'
                tabIndex={-1}
                disableRipple
                icon={<RadioButtonUnchecked />}
                checkedIcon={<TaskAlt color="success" />}
                defaultChecked
            />
        </IconButton>
    )
}
