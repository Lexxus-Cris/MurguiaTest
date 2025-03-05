import { useDispatch, useSelector } from "react-redux";
import { FormContainer, useForm } from "react-hook-form-mui"
import { InputEditToDo } from "../components/InputEditToDo"
import { usePutTareaMutation } from "../../../store/api/apiSlice";
import { useEffect } from "react";
import { clearTaskState } from "../../../store/slice/tareaSlice";

const EditToDoView = () => {
    const { task } = useSelector(state => state.task);

    const formContext = useForm({
        defaultValues: {
            descripcion: task.descripcion
        }
    });
    const dispatch = useDispatch();

    const [triggerUpdate] = usePutTareaMutation();

    const { handleSubmit, reset, setValue } = formContext;

    const onSubmitTask = async ({ descripcion }) => {
        const updatedTask = {
            ...task,
            descripcion: descripcion.trim(),
        }
        try {
            await triggerUpdate(updatedTask);
            reset();
            dispatch(clearTaskState());
            dispatch(successAlert("La tarea se ha actualizado con éxito"));
        } catch (error) {
            console.error('Ha ocurrido un error', error);
            dispatch(errorAlert('Ha ocurrido un error inesperado'));
        }
    }

    useEffect(() => {
        setValue('descripcion', task.descripcion);
    }, [task]);

    return (
        <FormContainer formContext={formContext}
            onSuccess={handleSubmit(onSubmitTask)}>
            <InputEditToDo />
        </FormContainer>
    )
}
export default EditToDoView
