import { Button, InputAdornment } from "@mui/material"
import { TextFieldElement } from "react-hook-form-mui"
import { CancelEditBtn } from "./CancelEditBtn"

export const InputEditToDo = () => {
    return (
        <TextFieldElement
            className="bg-slate-50 !max-w-sm w-full"
            required
            type='text'
            margin='dense'
            label='Editar tarea'
            name='descripcion'
            slotProps={{
                input: {
                    endAdornment: <InputAdornment position="end">
                            <Button
                            variant="contained"
                            aria-label="agregar elemento"
                            type="submit"
                            edge='end'
                        >
                            Editar
                        </Button>
                        <CancelEditBtn />
                    </InputAdornment>
                }
            }}
            // {...register('descripcion')}
        />
    )
}
