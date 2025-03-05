import { useDispatch } from "react-redux";
import {  Box, Typography } from "@mui/material"
import { CheckboxCompleted } from "../components/CheckboxCompleted";
import { DeleteBtn } from "../components/DeleteBtn";
import CardItem from "../components/CardItem";
import { useDeleteTareaMutation, useGetTareasCompletadasQuery, usePutTareaMutation } from "../../../store/api/apiSlice";

const CompletedListView = () => {

    const { data } = useGetTareasCompletadasQuery();

    const [ triggerPut, { isSuccess: successPut, isError: errorPut }] = usePutTareaMutation();
    const [ triggerDelete, { isSuccess: successDel, isError: errorDel } ] = useDeleteTareaMutation();

    const dispatch = useDispatch();

    return (
        <Box className='flex flex-wrap flex-col gap-2 max-w-sm my-3'>
            <Typography variant="h6" className="text-slate-500 !text-base">COMPLETADAS</Typography>
            {
                data?.length <= 0
                ? <Typography variant="h6">No se han encontrado tareas completadas</Typography>
                : data?.map(tarea => (
                <CardItem
                    key={tarea.id}
                >
                    <div className="flex items-center">
                        <CheckboxCompleted tarea={tarea} triggerPut={triggerPut} isSuccess={successPut} isError={errorPut} />
                        <Typography>{tarea.descripcion}</Typography>
                    </div>
                    <DeleteBtn id={tarea.id} triggerDelete={triggerDelete} isSuccess={successDel} isError={errorDel} dispatch={dispatch} />
                </CardItem>
            ))}
        </Box>
    )
}
export default CompletedListView
