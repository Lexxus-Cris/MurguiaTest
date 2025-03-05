import { AddCircle } from "@mui/icons-material"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"

export const InputAddToDo = () => {
    return (
        <FormControl fullWidth variant="outlined" className="bg-slate-50 max-w-sm" >
            <InputLabel htmlFor='add-item'>Agregar elemento</InputLabel>
            <OutlinedInput
                id="add-item"
                type="text"
                endAdornment= {
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="agregar elemento"
                            type="submit"
                            edge='end'
                        >
                            <AddCircle color="primary" />
                        </IconButton>
                    </InputAdornment>
                }
                label='Agregar elemento'
            />
        </FormControl>
    )
}
