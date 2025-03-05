using ToDoList.Server.Application.Interfaces;
using ToDoList.Server.Domain.Entities;
using ToDoList.Server.Infrastructure.Repositories;

namespace ToDoList.Server.Application.Services
{
    public class TareaService : ITareaService
    {
        private readonly ITareaRepository _repository;

        public TareaService(ITareaRepository repository)
        {
            _repository = repository;
        }

        public List<Tarea> ObtenerTareasSinCompletar()
        {
            var response = _repository.GetAll().ToList();
            return response;
        }
        public List<Tarea> ObtenerTareasCompletadas()
        {
            var response = _repository.GetAll().ToList();
            return response;
        }

        public void AgregarTarea(Tarea tarea)
        {
            _repository.Insert(tarea);
        }

        public void ActualizarTarea(Tarea tarea)
        {
            _repository.Update(tarea);
        }

        public void EliminarTarea(int id)
        {
            _repository.Delete(id);
        }
    }
}
