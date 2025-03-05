import { AddCircle } from "@mui/icons-material"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { TextFieldElement } from "react-hook-form-mui"

export const InputAddToDo = () => {
    return (
        <TextFieldElement
            className="bg-slate-50 !max-w-sm w-full"
            required
            type='text'
            margin='dense'
            label='Agregar tarea'
            name='descripcion'
            slotProps={{
                input: {
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            aria-label="agregar elemento"
                            type="submit"
                            edge='end'
                        >
                            <AddCircle color="primary" />
                        </IconButton>
                    </InputAdornment>
                }
            }}
        />
    )
}
