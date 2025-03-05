import { FormContainer, useForm } from "react-hook-form-mui";
import { InputAddToDo } from "../components/InputAddToDo";
import { usePostTareaMutation } from "../../../store/api/apiSlice";
import { errorAlert, successAlert } from "../../../store/slice/alertSlice";
import { useDispatch } from "react-redux";

const AddToDoView = () => {
    const formContext = useForm({
        defaultValues: {
            descripcion: ''
        }
    });

    const dispatch = useDispatch();

    const [ triggerPost ] = usePostTareaMutation();

    const { handleSubmit, reset } = formContext;

    const onSubmitTask = async ({ descripcion }) => {
        const newTask = {
            id: 0,
            descripcion: descripcion.trim(),
            fechaCreacion: new Date(),
            fechaVencimiento: new Date(),
            completada: false,
            destacada: false
        }
        try {
            await triggerPost(newTask);
            reset();
            dispatch(successAlert("Agregado con éxito"));
        } catch (error) {
            console.error('Ha ocurrido un error', error);
            dispatch(errorAlert('Ha ocurrido un error inesperado'));
        }
    }

    return (
        <FormContainer
            formContext={formContext}
            onSuccess={handleSubmit(onSubmitTask)}
        >
            <InputAddToDo />
        </FormContainer>
    )
}

export default AddToDoView;
