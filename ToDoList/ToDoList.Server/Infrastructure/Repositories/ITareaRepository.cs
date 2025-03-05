using ToDoList.Server.Domain.Entities;

namespace ToDoList.Server.Infrastructure.Repositories
{
    public interface ITareaRepository
    {
        List<Tarea> GetAll();
        void Insert(Tarea tarea);
        void Update(Tarea tarea);
        void Delete(int id);
    }
}
