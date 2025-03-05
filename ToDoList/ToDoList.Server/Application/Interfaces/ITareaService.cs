using ToDoList.Server.Domain.Entities;

namespace ToDoList.Server.Application.Interfaces
{
    public interface ITareaService
    {
        List<Tarea> ObtenerTareasSinCompletar();
        List<Tarea> ObtenerTareasCompletadas();
        void AgregarTarea(Tarea tarea);
        void ActualizarTarea(Tarea tarea);
        void EliminarTarea(int id);
    }
}
