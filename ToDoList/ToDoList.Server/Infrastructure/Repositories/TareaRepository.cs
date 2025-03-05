using CsvHelper;
using System.Globalization;
using ToDoList.Server.Domain.Entities;
using ToDoList.Server.Infrastructure.CSV;

namespace ToDoList.Server.Infrastructure.Repositories
{
    public class TareaRepository : ITareaRepository
    {
        private readonly string _filePath;
        private readonly object _lock = new object();

        public TareaRepository()
        {
            _filePath = Path.Combine(Directory.GetCurrentDirectory(), "assets", "tareas.csv");
            EnsureCsvFileExists();
        }

        private void EnsureCsvFileExists()
        {
            if (!File.Exists(_filePath))
            {
                var directory = Path.GetDirectoryName(_filePath);
                if (!Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }
                using (var writer = new StreamWriter(_filePath))
                using (var csv = new CsvWriter(writer, CultureInfo.InvariantCulture))
                {
                    csv.Context.RegisterClassMap<TareaMap>();
                    csv.WriteHeader<Domain.Entities.Tarea>();
                    writer.WriteLine();
                }
            }
        }

        public List<Tarea> GetAll()
        {
            lock (_lock)
            {
                using (var reader = new StreamReader(_filePath))
                using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
                {
                    _ = csv.Context.RegisterClassMap<TareaMap>();
                    csv.Read();
                    csv.ReadHeader();
                    var records = csv.GetRecords<Tarea>().ToList();
                    return records;
                }
            }
        }

        public void Insert(Tarea tarea)
        {
            lock (_lock)
            {
                var tareas = GetAll();
                tarea.Id = tareas.Any() ? tareas.Max(t => t.Id) + 1 : 1;
                tarea.FechaCreacion = DateTime.Now;
                tareas.Add(tarea);
                WriteAll(tareas);
            }
        }

        public void Update(Tarea tarea)
        {
            lock (_lock)
            {
                var tareas = GetAll();
                var index = tareas.FindIndex(t => t.Id == tarea.Id);
                if (index >= 0)
                {
                    tareas[index] = tarea;
                    WriteAll(tareas);
                }
            }
        }

        public void Delete(int id)
        {
            lock (_lock)
            {
                var tareas = GetAll();
                var tareaToRemove = tareas.FirstOrDefault(t => t.Id == id);
                if (tareaToRemove != null)
                {
                    tareas.Remove(tareaToRemove);
                    WriteAll(tareas);
                }
            }
        }

        private void WriteAll(List<Tarea> tareas)
        {
            using (var writer = new StreamWriter(_filePath))
            using (var csv = new CsvWriter(writer, CultureInfo.InvariantCulture))
            {
                csv.Context.RegisterClassMap<TareaMap>();
                csv.WriteHeader<Tarea>();
                csv.NextRecord();
                csv.WriteRecords(tareas);
            }
        }
    }
}
