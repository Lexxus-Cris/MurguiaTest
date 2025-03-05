using CsvHelper.Configuration;
using ToDoList.Server.Domain.Entities;

namespace ToDoList.Server.Infrastructure.CSV
{
    public class TareaMap : ClassMap<Tarea>
    {

        public TareaMap()
        {
            Map(m => m.Id);
            Map(m => m.Descripcion);
            Map(m => m.FechaCreacion);
            Map(m => m.FechaVencimiento);
            Map(m => m.Completada);
            Map(m => m.Destacada);
        }
    }
}
