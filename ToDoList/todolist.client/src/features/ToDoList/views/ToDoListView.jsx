import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material"
import CardItem from './../components/CardItem.jsx';
import { CheckboxRadio } from './../components/CheckboxRadio.jsx';
import { CheckboxDestacar } from './../components/CheckboxDestacar';
import { EditBtn } from './../components/EditBtn';
import { DeleteBtn } from './../components/DeleteBtn';
import { useDeleteTareaMutation, useGetTareasSinCompletarQuery, usePutTareaMutation } from "../../../store/api/apiSlice.js";

const ToDoListView = () => {

  const { data } = useGetTareasSinCompletarQuery();

  const [ triggerPut, { isSuccess: successPut, isError: errorPut }] = usePutTareaMutation();

  const [ triggerDelete, { isSuccess: successDel, isError: errorDel } ] = useDeleteTareaMutation();

  const dispatch = useDispatch();

  const sortedData = data ? [...data].sort((a, b) => b.destacada - a.destacada) : [];

  return (
    <Box className='flex flex-wrap gap-2 max-w-sm my-3 max-h-[350px] overflow-y-auto'>
      <Typography variant="h6" className="text-slate-500 !text-base">POR HACER</Typography>

      {
        data?.length <= 0
          ? <Typography variant="h6">No se han encontrado tareas por hacer</Typography>
          : sortedData?.map(tarea => (
          <CardItem
            destacada={tarea.destacada}
            key={tarea.id}
          >
            <div className='flex items-center'>
              <CheckboxRadio
                tarea={tarea}
                triggerPut={triggerPut}
                isSuccess={successPut}
                isError={errorPut}
                dispatch={dispatch}
              />
              <Typography>{tarea.descripcion}</Typography>
            </div>

            <div className="flex items-center">
              <CheckboxDestacar
                tarea={tarea}
                triggerPut={triggerPut}
                isSuccess={successPut}
                isError={errorPut}
                dispatch={dispatch}
              />
              <EditBtn tarea={tarea} dispatch={dispatch} />
              <DeleteBtn
                id={tarea.id}
                triggerDelete={triggerDelete}
                isSuccess={successDel}
                isError={errorDel}
                dispatch={dispatch}
              />
            </div>
          </CardItem>
      ))}

    </Box>
  )
}
export default ToDoListView
