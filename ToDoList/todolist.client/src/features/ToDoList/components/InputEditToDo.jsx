import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"

export const InputEditToDo = () => {
    return (
        <FormControl fullWidth variant="outlined" className="bg-slate-50 max-w-sm !my-3" >
            <InputLabel htmlFor='add-item'>Editar tarea</InputLabel>
            <OutlinedInput
                id="add-item"
                type="text"
                endAdornment={
                    <InputAdornment position="end">
                        <Button
                            variant="contained"
                            aria-label="agregar elemento"
                            type="submit"
                            edge='end'
                        >
                            Editar
                        </Button>
                    </InputAdornment>
                }
                label='Agregar elemento'
            />
        </FormControl>
    )
}
